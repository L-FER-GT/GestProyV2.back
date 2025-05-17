import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import usuariosRouter from './routes/usuarios';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Alternativa más segura si necesitas incluir el frontend en Vercel:
const corsOptions: cors.CorsOptions = {
  origin: [
    'https://gest-proy-v2-front.vercel.app',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

// Rutas
app.get('/', (req: Request, res: Response) => {
  res.send('Backend con Vite + TypeScript funcionando!');
});

app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
  console.log(`⚡️ Servidor corriendo en http://localhost:${port}`);
});