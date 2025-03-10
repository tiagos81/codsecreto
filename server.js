require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/config', (req, res) => {
  res.json({
    mainPassword: process.env.ENCRYPTED_MAIN_PASSWORD
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
