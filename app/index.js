import express from 'express';
import cors from 'cors';
import servidor from '../app/routes/servidor.js';

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());

app.use('/servidor', servidor);


app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
