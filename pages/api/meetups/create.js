import { MongoClient } from "mongodb";
export default async function handler(request, response) {
  try {
    if (request.method === "POST") {
      const payload = request.body;
      const client = await MongoClient.connect(
        "mongodb+srv://demo:chandajha2012@cluster-1.bhzjq15.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      await meetupsCollection.insertOne(payload);
      client.close();
      response.status(201).json({
        message: "Meetups created",
      });
    } else {
      response.status(400).json({
        message: "Invalid access",
      });
    }
  } catch (e) {
    response.status(400).json({
      message: e.message,
    });
  }
}
