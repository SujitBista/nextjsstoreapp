import mongoose, { Schema, Document, Model } from 'mongoose';

// Define an interface for the Product schema
interface IProduct extends Document {
  name: string;
  qty: string;
  price: number;
}

// Define the schema with the interface
const ProductSchema: Schema<IProduct> = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: String, required: true },
  price: { type: Number, required: true },
});

// Create or retrieve the Product model
const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
