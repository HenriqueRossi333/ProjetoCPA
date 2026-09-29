const mongoose = require("mongoose")
const usuario = process.env.DB_USER
const senha = process.env.DB_PASS

const conexao = mongoose.
connect(`mongodb+srv://${usuario}:${senha}@cluster0.f9j7svj.mongodb.net/?appName=Cluster0`).then(()=>{
    console.log("Conectado ao banco de dados!")
}).catch((error)=>{
    console.log(error)
})

module.exports = conexao