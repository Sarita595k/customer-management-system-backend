import express from "express"
import dotenv from "dotenv"
import { connectToDb } from "./src/config/db.js"
import route from "./src/route/customerRoute.js"
dotenv.config()
import cors from "cors"

// creating the app 
const app = express()

// allowing cors origin 
app.use(cors({
    origin: "http://localhost:5173", // default Vite port
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);
app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Trial message from get request")
// })

app.use("/api/customer", route)
// listening to the port 
app.listen(process.env.PORT || 2100, () => {
    // calling db function to connect when the port is listening
    connectToDb()
    console.log("Server is running successfully")
})
