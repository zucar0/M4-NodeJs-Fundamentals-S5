const express = require('express');
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/', async (req, res) => {
    return res.send('Bienvenido a mi api')
})