// pages/api/createDocument.js
import dbConnect from '../../lib/mongodb';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method === 'POST') {
    try {
      // Connect to the database
      await dbConnect();

      // Get the collection and insert data
      const { name, qty, price } = req.body; // assume `name`, `qty` and `price` are fields in your form data
      const client = await clientPromise;
      const db = client.db("storeapp");
      const collection = db.collection("storeapp");

      // Insert form data into the collection
      const result = await collection.insertOne({ name, qty, price });

      // Send response back to client
      res.status(200).json({ message: 'Document created successfully!', result });
    } catch (error) {
      res.status(500).json({ message: 'Error creating document', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
