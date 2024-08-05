import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';

dotenv.config(); // Ensure environment variables are loaded

const uri = process.env.DB_URL || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

const connectDB = async () => {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    db = client.db("ecommerce");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the process with failure
  }
};

export { db, connectDB };
