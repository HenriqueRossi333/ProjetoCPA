//EXTENSÕES DO PROJETO
require("dotenv").config()
const express = require("express")
const app = express()
require("./DB/Connect")
const CpaController = require("./CPA/CONTROLLERS/CpaController")

//FUNCIONALIDADES CPA
app.post("/nova/InfoCpa", CpaController.novaInfoCPA)


//INICIANDO O SERVIDOR
app.listen(8080, ()=>{
    console.log("Servidor rodando!")
})