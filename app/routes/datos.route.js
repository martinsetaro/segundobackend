import { Router } from "express";


const router = Router();



router.get("/usuarios", (req,res)=>{
    res.json({name:"joe", lastname:"doe"})
})

export default router;