import express from "express";
import cors from "cors";        //used for development only

const app = express();

//used for dev to allow requests from alternate domain
app.use(cors({
    credentials:true, 
    origin:['http//localhost:4200']
}))

const PORT = 5000


