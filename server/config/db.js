import mongoose from "mongoose";

const connecctDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Atlas connected!")
    }
    catch(error){
        console.error("MongoDB Connection error:", error.message);
        process.exit(1);
    }
}

export default connectDB;