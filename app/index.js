import express from 'express';
import cors from 'cors';
import datosUsuarios from '../app/routes/datos.route.js';
import servidor from '../app/routes/servidor.route.js';

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());

app.use('/servidor', servidor);
app.use('/datos', datosUsuarios);

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
