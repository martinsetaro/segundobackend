import express from 'express';
import cors from 'cors';
import servidor from '../routes/servidor.js';
import usuarios from '../routes/datos.js'

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());

app.use(servidor);
app.use(usuarios)


app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
