const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Stock = require('../models/stock');

const router = express.Router();

router.use(authMiddleware);

router.post('/stock', async (req, res) => {
    try{
        const stock = await Stock.create(req.body);
        res.send({ id: stock.factoryid });
    } catch (err) {
        res.status(400).send({ error: 'Falha no cadastramento'});
    }
   
});

router.get('/stock/:id', async (req, res) => {
    var id = req.params.id;
    try{
        const stock = await Stock.find({ factoryid: id});
        res.send(stock);
    } catch (err) {
        res.status(500).send({ error: 'Falha para processar a requisição'});
    }
   
});

router.put('/stock/:id', async (req, res) => {
    var id = req.params.id;
    try{
        const stock = await Stock.update({factoryid: id}, {$inc: { qty: req.body.qty }});
        res.send({id: id});
    } catch (err) {
        res.status(500).send({ error: 'Falha para processar a requisição'});
    }
   
});


module.exports = app => app.use('/api', router);