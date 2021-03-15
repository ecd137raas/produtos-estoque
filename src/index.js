const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: false}));

require('./app/controllers/authController')(app);
require('./app/controllers/productController')(app);
require('./app/controllers/stockController')(app);


app.listen(3333);