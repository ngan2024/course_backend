import express from "express";
import bodyParser from 'body-parser';

const app = express();

app.get('/api/v1/whishper', (req, res) =>{
    res.json([])
});

app.get('/api/v1/whishper/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    res.json([])
});

app.post
# continue in Picture