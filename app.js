const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./model/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.render("primeira_pagina")
})

app.post("/cadastrar", function(req, res){
    //res.send(req.body.bairro)
    post.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep

    }).then(function(){
        console.log("dados cadastrados com sucesso! ")
        res.send("Cadastro realizado com sucesso!")
    }).catch(function(erro){
        console.log("Erro ao cadastrar: " + erro)
    })

})

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

