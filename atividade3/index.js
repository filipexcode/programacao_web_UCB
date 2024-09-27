const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.somar(Number(a), Number(b));
    res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.subtrair(Number(a), Number(b));
    res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = calculadora.multiplicar(Number(a), Number(b));
    res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;
    if (Number(b) === 0) {
        return res.status(400).send('Erro: Divisão por zero.');
    }
    const resultado = calculadora.dividir(Number(a), Number(b));
    res.send(`Resultado da divisão: ${resultado}`);
});

const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});