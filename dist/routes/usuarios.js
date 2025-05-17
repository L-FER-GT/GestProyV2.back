"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database_1 = __importDefault(require("../database"));
const usuariosRouter = (0, express_1.Router)();
usuariosRouter.get('/', async (req, res) => {
    try {
        const [rows] = await database_1.default.query('SELECT * FROM usuarios');
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error de base de datos');
    }
});
exports.default = usuariosRouter;
