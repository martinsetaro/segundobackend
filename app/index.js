import express from 'express';
import cors from 'cors';
import datos from './routes/datos.routes.js'


const app = express();
const Port = process.env.Port || 4001;

app.use(express.json());
app.use(cors());



app.use(datos)



app.listen(Port,()=> {

    console.log(`El servidor esta funcionando en el puerto ${Port}`)
})