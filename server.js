const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// ✅ Servir arquivos do frontend
app.use(express.static("public"));

// ✅ Teste para verificar se o servidor está rodando
app.get("/", (req, res) => {
    res.send("🚀 Servidor está rodando!");
});

// ✅ Rota para fornecer a senha
app.get("/env", (req, res) => {
    res.json({
        MAIN_PASSWORD: process.env.MAIN_PASSWORD || "Senha não encontrada"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
