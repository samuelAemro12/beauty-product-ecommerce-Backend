import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
  brand: { type: String },
  description: { type: String },
  ingredients: { type: String },
  price: { 
    type: Number,
    required: true },
  currency: { 
    type: String, 
    default: 'ETB' },
  stock: { 
    type: Number, 
    required: true },
  lowStockThreshold: {
      type: Number,
      default: 5,
    },
    restockThreshold: {
      type: Number,
      default: 10,
    },
    lastRestockDate: {
      type: Date,
      default: Date.now,
    },
    promotionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Promotion',
    },
    category: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Category' },
    images: [String],
    active: { 
      type: Boolean, 
      default: true },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
