const mongoose = require('mongoose')
mongoose.Promise = global.Promise //mongoose está depreciado e pra tirar o warn do terminal é feito isso
module.exports = mongoose.connect('mongodb://localhost/todo')