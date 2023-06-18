import express from 'express';
import cors from 'cors';
import datosUsuarios from '../app/api/datos.js'


const app = express();
const Port = process.env.Port || 4001;

app.use(express.json());
app.use(cors());



app.get("/",(req,res)=>{
    res.send("Hola aquí funciona bien")
})

app.use(datosUsuarios)


app.listen(Port,()=> {

    console.log(`El servidor esta funcionando en el puerto ${Port}`)
})