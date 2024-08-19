import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
import express from "express";

export default async function connection(){
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        express().listen(process.env.PORT || 3000, ()=>{
            console.log("⚙🔔 Database Connect Successfully! ", connection.connections[0].name);
         })

        express().on("error",(err)=>{
            console.log("⚙🔔 Express Not Working.. ");
            process.exit(1);
        })
        
        
    } catch (error) {
        console.log("⚙🔔 Database Connection Failed: ", error);   
        process.exit(1);
    }
}