const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Product = require('../models/product');

const router = express.Router();

router.use(authMiddleware);

router.post('/product/create', async (req, res) => {
    const { factoryid } = req.body;
    try{
        if( await Product.findOne({ factoryid }))
            return res.status(400).send({error: 'Produto já cadastrado'});
        const prod = await Product.create(req.body);
        res.send({ id: prod.factoryid });
    } catch (err) {
        res.status(400).send({ error: 'Falha no cadastramento'});
    }
   
});

router.get('/products', async (req, res) => {
    try{
        const prod = await Product.find({});
        res.send(prod);
    } catch (err) {
        res.status(500).send({ error: 'Falha no processamento da requisição'});
    }
   
});

router.get('/product/:id', async (req, res) => {
    var id = req.params.id;
    try{
        const prod = await Product.find({ factoryid: id});
        res.send(prod);
    } catch (err) {
        res.status(500).send({ error: 'Falha no processamento da requisição'});
    }
   
});

module.exports = app => app.use('/api', router);