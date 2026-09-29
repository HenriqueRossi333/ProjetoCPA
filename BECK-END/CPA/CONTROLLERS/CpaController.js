const NovaInfoCPA = require("../MODELS/NovaInfo")
const mongoose = require("mongoose")

const novaInfoCPA = async (req, res)=>{
    const {valor_inicial, valor_final, plataforma, observacoes} = req.body

    if(!valor_inicial || !valor_final || !plataforma || !observacoes){
        return res.status(400).json({
            mensagem: "Todos os campos são obrigatórios!"
        })
    }else{
        try{
            const NovaInfo = new NovaInfoCPA({
                valor_inicial, 
                valor_final, 
                plataforma_usada: plataforma, 
                observacoes
            })

            await NovaInfo.save()

            return res.status(201).json({
                mensagem: "Sucesso!",
                informações_cadastradas: NovaInfo
            })
        }catch(error){
            console.log(error)
            return res.status(500).json({
                mensagem: "Erro inesperado!"
            })
        }
    }
}

module.exports = novaInfoCPA