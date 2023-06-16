import mongoose from "mongoose";


const connectDB = async () => {
    return await mongoose.connect(process.env.DB_LOCAL)
    .then(() => {console.log("Database Connected!")})
    .catch((err)=>{console.log("database error: " + err)})
}

export default connectDB