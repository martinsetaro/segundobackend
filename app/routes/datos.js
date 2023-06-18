import { Router } from "express";
import db from '../db.json' assert {type :'json'};

const router = Router();



router.get("/usuarios", (req,res)=>{
    res.json(db)
})

export default router;