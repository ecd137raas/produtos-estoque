const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dev', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;