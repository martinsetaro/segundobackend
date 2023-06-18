import express from 'express';
import cors from 'cors';
import datosUsuarios from '../app/routes/datos.route.js'
import servidor from '../app/routes/servidor.route.js'


const app = express();
const Port = process.env.Port || 4001;

app.use(express.json());
app.use(cors());



app.use(servidor)
app.use(datosUsuarios)




app.listen(Port,()=> {

    console.log(`El servidor esta funcionando en el puerto ${Port}`)
})