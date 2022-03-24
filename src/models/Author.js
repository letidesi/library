import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nameAuthor: { type: String, required: true },
    age: { type: Number },
    nationality: { type: String },
  },
  {
    versionKey: false,
  }
);

const authors = mongoose.model("authors", authorSchema);

export default authors;
