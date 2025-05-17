import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import usuariosRouter from './routes/usuarios';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.get('/', (req: Request, res: Response) => {
  res.send('Backend con Vite + TypeScript funcionando!');
});

// Montar el router
app.use('/usuarios', usuariosRouter); // Ahora la ruta será accesible en /usuarios

// Inicia el servidor
app.listen(port, () => {
  console.log(`⚡️ Servidor corriendo en http://localhost:${port}`);
});