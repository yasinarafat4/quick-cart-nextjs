import { MongoClient, ServerApiVersion } from "mongodb";

/**
 * @type {import("mongodb").Db}
 */
let db;

const DbConnect = async () => {
  if (db) return db;
  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qx5eerd.mongodb.net/?retryWrites=true&w=majority`;
    // Create a MongoClient
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("quickCartDB");
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Quick Cart you successfully connected to MongoDB!"
    );
    return db;
  } catch (error) {
    console.log(error.message);
  }
};

export default DbConnect;
