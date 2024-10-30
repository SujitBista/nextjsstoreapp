// app/api/createDocument/route.js

import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import clientPromise from '../../../lib/mongodbClient';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, qty, price } = body;

    const client = await clientPromise;
    const db = client.db("storeapp");
    const collection = db.collection("storeapp");

    const result = await collection.insertOne({ name, qty, price });
    return NextResponse.json({ message: 'Document created successfully!', result });
  } catch (error) {
    console.error('Error creating document:', error);
    return NextResponse.json({ message: 'Error creating document', error: error.message }, { status: 500 });
  }
}
