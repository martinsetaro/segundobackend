import { Router } from "express";
import db from '../db.json.js' assert { type : "json"};

const route = Router();



route.get("/usuarios", (req,res)=>{
    res.json(db)
})

export default route;