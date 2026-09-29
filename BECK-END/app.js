require("dotenv").config()
const express = require("express")
const app = express()
require("./DB/Connect")


app.listen(8080, ()=>{
    console.log("Servidor rodando!")
})