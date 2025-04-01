import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string

if(!MONGODB_URI){
  throw new Error("Please define MONGODB_URI in .env.local or .env")
}

async function dbConnect(){
  if(mongoose.connection.readyState > 1){
    return
  }

  return mongoose.connect(MONGODB_URI)
}

export default dbConnect