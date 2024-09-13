const lc = require('./letter_case/letter_case');

const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello world, rodou porraaaaaaa');
})

app.get('/upper/:n', function(req, res){
    let word = req.params.n;
    res.send(lc.to_upper(word));
})

app.get('/lower/:n', function(req, res){
    let word = req.params.n;
    res.send(lc.to_lower(word));
})

const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});