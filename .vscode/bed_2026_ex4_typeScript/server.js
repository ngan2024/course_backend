import express from "express";
import bodyParser from 'body-parser';
import {getAll, getById, create, updateById, deleteId} from '../../../bed-2026-ex3-restAPI/step0/store.js';

const app = express();
//check above
app.use(express.static('public'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/api/v1/whishper', (req, res) =>{
    const whishper = getAll(); 
    res.json(whishper);
   
});

app.get('/api/v1/whishper/:id', async  (req, res) =>{
    const id = parseInt(req.params.id);
    const whishper = await getById(id);
    if(!whishper){
        return res.sendStatus(404);
    } else {
        returnres.json(whishper);
    }
});

app.post('/api/v1/whishper', async (req, res) =>{
    const newWhishper = await create(req.body);
    res.status(201).json(newWhishper);
});
    