const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Middleware para logging
app.use(morgan('dev'));

// Middleware para parsear JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

// Rota de exemplo para GET
app.get('/api/dados', (req, res) => {
    const dados = {
        id: 1,
        nome: 'Exemplo',
        valor: 42
    };
    res.json(dados);
});

// Rota de exemplo para POST
app.post('/api/dados', (req, res) => {
    const novoDado = req.body;
    // Aqui você poderia adicionar lógica para salvar o dado
    res.status(201).json({ message: 'Dado criado com sucesso!', dado: novoDado });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
