import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.get('/', (req: Request, res: Response) => {
  res.send('Backend con Vite + TypeScript funcionando!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`⚡️ Servidor corriendo en http://localhost:${port}`);
});