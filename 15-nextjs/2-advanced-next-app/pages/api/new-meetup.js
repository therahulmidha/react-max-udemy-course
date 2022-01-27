// POST /api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // store in database
    try {
      const client = await MongoClient.connect(
        "---"
      );

      const db = client.db();
      const meetupCollection = db.collection("meetups");
      const result = await meetupCollection.insertOne(data);
      console.log(result);
      client.close();

      res.status(201).json({
        message: "Meetup inserted",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error,
      });
    }
  }
}

export default handler;
