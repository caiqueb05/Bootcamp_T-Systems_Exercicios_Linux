const mongoose = require('mongoose');
const User = require('./User');
const Clientes = require('./Clientes');
const express = require('express')
const dotenv = require('dotenv');

const app = express();
dotenv.config()

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

const cliente = mongoose.connect(MONGOURL).then(() =>{
    console.log("Base de dados conectada com sucesso!")
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })
}).catch((err) => console.log(err))

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//     console.log('Conectado a base de dados')
// })

async function run(){
    try{
        const user = await User.create({name: 'João', age: 25})
        console.log(user)
    } catch(err){
        console.log(err)
    }
}
run();

async function novoCliente(){
    try{
        const clientes = await Clientes.create({name: 'Bastião', idade: 35, cpf: '123.456.789-00'})
        console.log(clientes)
    } catch(err){
        console.log(err)
    }
}
novoCliente();

async function getCliente($nome){
    try{
        const clientes = await Clientes.find({name: $nome})
        console.log(clientes)
    } catch(err){
        console.log(err)
    }
}
getCliente('Bastião');


