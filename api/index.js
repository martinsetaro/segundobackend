import express from 'express';
import cors from 'cors';
import datos from './routes/datos.routes.js'


const app = express();
const Port = process.env.Port || 4001;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("aqui adelante funciona bien")
})

app.use(datos)



app.listen(Port,()=> {

    console.log(`El servidor esta funcionando en el puerto ${Port}`)
})