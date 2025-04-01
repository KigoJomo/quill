import mongoose, { Document, Schema } from 'mongoose';

interface ICategory extends Document {
  name: string;
  image: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.models.Category ||
  mongoose.model<ICategory>('Category', CategorySchema);
