const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb+srv://caiquebezerra:GmgzVVNu8jLHQI1B@cluster0.536tdjv.mongodb.net/sample_loja_departamentos?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Conectado ao MongoDB')
}).catch((err) => {
    console.log('Erro ao conectar ao MongoDB: ' + err)
})

async function run(){    
    let teste = await User.create({name: "Teste", age:12});
    console.log(teste);
}
run()

async function getUserByName($name){
    let user = await User.findOne({name: $name});
    console.log(user);
}
// console.log(getUserByName("Teste"));

getUserByName("Teste");

