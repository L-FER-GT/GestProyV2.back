import { Router } from 'express';
import pool from '../database';

const usuariosRouter  = Router();

usuariosRouter .get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error de base de datos');
  }
});

export default usuariosRouter ; 