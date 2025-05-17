"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middlewares
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Rutas
app.get('/', (req, res) => {
    res.send('Backend con Vite + TypeScript funcionando!');
});
// Montar el router
app.use('/usuarios', usuarios_1.default); // Ahora la ruta será accesible en /usuarios
// Inicia el servidor
app.listen(port, () => {
    console.log(`⚡️ Servidor corriendo en http://localhost:${port}`);
});
