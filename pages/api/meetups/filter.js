import { MongoClient, ObjectId } from "mongodb";
export default async function handler(request, response) {
  try {
    if (request.method === "GET") {
      const { id } = request.query;
      const client = await MongoClient.connect(
        "mongodb+srv://demo:chandajha2012@cluster-1.bhzjq15.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.findOne({
        _id: ObjectId(id),
      });
      client.close();
      response.status(201).json({
        message: "Meetups fetched",
        data: result,
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
