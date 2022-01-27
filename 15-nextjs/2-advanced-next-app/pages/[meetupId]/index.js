import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

// this function is required to be written if getStaticProps is written for dynamic page like this
// this defines possible values of path params that user can enter
export async function getStaticPaths() {
  // fetch data from a single meetup
  const client = await MongoClient.connect(
    "---"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const result = await meetupCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: false, // false means all supported meetupId are mentioned here and throw an error if other id is entered
    // if fallback is true, nextjs understands that there might be more pages and wait if page is loadable and displays white page till then
    // other valid option is "blocking", where there might be more pages and wait if page is not yet ready and load when ready
    paths: result.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    // [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m3",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // fetch data from a single meetup
  const client = await MongoClient.connect(
    "---"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
    revalidate: 10,
  };
}
export default MeetupDetails;
