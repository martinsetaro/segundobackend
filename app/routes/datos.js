import { Router } from "express";


const router = Router();



router.get("/usuarios", (req,res)=>{
    res.status(200).json({name:"joe",lastname:"doe"})
})

export default router;