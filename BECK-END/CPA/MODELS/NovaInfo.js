const mongoose = require("mongoose")

const novaInfoCPA = new mongoose.model("NovaInfoCPA", ()=>{
    valor_inicial: Number;
    valor_final: Number;
    plataforma_usada: String;
    Observacoes: String
})

module.exports = novaInfoCPA