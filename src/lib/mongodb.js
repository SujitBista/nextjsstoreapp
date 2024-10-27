// lib/mongodb.js
import mongoose from 'mongoose';
// import clientPromise from './mongodb'; // import MongoDB client promise

const MONGODB_URI = process.env.MONGODB_URI;

// Prevent multiple connections in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;


// export async function createDatabase() {
//   const client = await clientPromise;
//   const db = client.db("myNewDatabase");
//   const collection = db.collection("myNewCollection");

//   // Insert sample data to create DB and collection
//   await collection.insertOne({ name: "Example", type: "Sample" });
//   console.log("Database and collection created!");
// }

