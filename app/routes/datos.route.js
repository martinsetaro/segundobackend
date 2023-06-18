import { Router } from "express";


const route = Router();



route.get("/usuarios", (req,res)=>{
    res.json({name:"joe", lastname:"doe"})
})

export default route;