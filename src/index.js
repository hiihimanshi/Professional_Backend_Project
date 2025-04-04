// require('dotenv').config({path:"./env"})
// import mongoose from "mongoose"
// import { DB_NAME } from "./constant"

import dotenv from "dotenv"
import connectDB from "./db/function.js" 

dotenv.config({
    path:"./env"
})
connectDB()

.then(()=>{
    app.listen(process.env.PORT || 6000, () =>{
        console.log(`Server is running at Port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed",error)
})

// first approach of connecting db
// import express from "express"
// const app = express()
// // (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         // listener
//         app.on("error", (error)=>{
//             console.error("Error:",error)
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("Error: ", error)
//         throw error
//     }
// })()