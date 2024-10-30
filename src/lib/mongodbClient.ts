import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri: string = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to persist the MongoDB client
  const globalWithMongoClient = global as typeof globalThis & { _mongoClientPromise?: Promise<MongoClient> };
  
  if (!globalWithMongoClient._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongoClient._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongoClient._mongoClientPromise;
} else {
  // In production, create a new MongoClient instance for each request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
