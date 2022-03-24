import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://apilibrary:7575@cluster0.g8xpx.mongodb.net/library?retryWrites=true&w=majority"
);

let db = mongoose.connection;

export default db;
