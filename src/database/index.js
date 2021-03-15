const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/raasjava', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;