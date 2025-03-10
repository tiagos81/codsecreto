const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/env", (req, res) => {
    res.json({
        MAIN_PASSWORD: process.env.MAIN_PASSWORD,
        UNLOCK_PASSWORD: process.env.UNLOCK_PASSWORD
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
