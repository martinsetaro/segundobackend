import { Router} from "express";

const route = Router();


route.get("/",(req,res)=>{

    res.send("Desde el servidor")
})



export default route;