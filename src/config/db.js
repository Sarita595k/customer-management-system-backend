import mongoose from "mongoose"
// created a function to connect to the db and as well as 
// export the function to call it in the main index.js file
export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Db connected Successfully")
    } catch (err) {
        console.log(`mongoDb error`, err.message)
    }
}