import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.DB_URL || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

export const connectDB = async () => {
  try {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    db = client.db("ecommerce"); // Specify your database name
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};

export const getDB = () => {
  if (!db) {
    throw new Error("Database not connected!");
  }
  return db;
};
