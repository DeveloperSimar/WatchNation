import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
import express from "express";

export default async function connection(){
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

        express().on("error",(err)=>{
            console.log("⚙🔔 Express Not Working.. ");
            process.exit(1);
        })

        return connection;
        
        
    } catch (error) {   
        throw error;
    }
}