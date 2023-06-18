import { Router } from "express";


const router = Router();



router.get("/", (req,res)=>{
    res.json({name:"joe", lastname:"doe"})
})

export default router;