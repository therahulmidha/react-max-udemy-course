import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup: Taj Mahal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
    address: "Agra, UP, India",
    description: "Built by Shah Jahan for his beloved wife Mumtaz",
  },
  {
    id: "m2",
    title: "Second meetup: Red Fort",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Delhi_fort.jpg",
    address: "Delhi, India",
    description: "From the times of Mughal Dynasty lived in Delhi",
  },
  {
    id: "m3",
    title: "Third meetup: Gateway of India",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg",
    address: "Mumbai, India",
    description: "A great place",
  },
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta 
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "---"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const result = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

// // executed always when url is hit
// export async function getServerSideProps(context) {
//   // request and response object if authentication etc is required to be checked
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: DUMMY_MEETUPS,
//   };
// }
export default HomePage;
