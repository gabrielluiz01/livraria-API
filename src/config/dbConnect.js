import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://gabrielluiz:1901Manu2014@cluster0.p4db8.mongodb.net/Livraria-node"
);

let db = mongoose.connection;

export default db;
