import { error } from "console";
import mongoose, { Mongoose } from "mongoose";
import { decodeFormState } from "next/dist/server/app-render/entry-base";

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) {
  throw new Error("MONGO URI not found in .env.local file...");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        dbName: "devflow",
      })
      .then((result) => {
        console.log("Connected to MongoDB");
        return result;
      })
      .catch((error) => {
        console.log("Error occurred while connecting to MongoDB");
        throw new Error("DB Connection Issue!");
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
