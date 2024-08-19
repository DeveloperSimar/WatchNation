import dotenv from "dotenv";
dotenv.config();
import express from "express";
import DBconnect from "./db/connection.js"


DBconnect()
.then((connection)=>{
    express().listen(process.env.PORT || 3000, ()=>{
        console.log("⚙🔔 Database Connect Successfully! ", connection.connections[0].name);
    })
})
.catch((err)=>{
    console.log("⚙🔔 Database Connection Failed: ", err); 
});

