import mongoose from "mongoose";

const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    coverImage: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    relatedCat: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
