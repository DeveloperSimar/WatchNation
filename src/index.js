import dotenv from "dotenv";
dotenv.config();
//import express from "express";
import DBconnect from "./db/connection.js"
import {app} from "./app.js";


DBconnect()
.then((connection)=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log("⚙🔔 Database Connect Successfully! ", connection.connections[0].name);
    })
})
.catch((err)=>{
    console.log("⚙🔔 Database Connection Failed: ", err); 
});

