const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    name: String,
    idade: Number,
    cpf: String
})

module.exports = mongoose.model('Cliente', clienteSchema);