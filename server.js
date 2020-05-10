// configurando o servidor
const express = require("express")
const server = express()

//configurar o servidor para aprensentar arquivos estaticos
server.use(express.static('public'))

//habilitar body do formulário
server.use(express.urlencoded({extended: true}))


//configurando a template engine
const nunjucks = require ("nunjucks")
nunjucks.configure("./", {
express: server,
noCache: true , 
//boolean ou booleano aceita 2 valores, verdadeiro ou falso
})

//lista de doadores: vetou ou array
const donors = [
{
    name: "Luma Montes",
    blood: "B"
},
    
    
   {
       name: "Lorena Montes",
       blood: "AB-"
},
    
    
{
    name: "Luana Montes",
        blood: "B+"
},

{
    
   name: "Lumana Montes",
   blood: "O-"
    
},
   
]
// configurar a apresentação da página
server.get("/", function (req, res) {
    return res.render("index.html", {donors})
})

server.post("/", function(req, res) {
    //pegar dados do formulário 
    const name = req.body.name
    const blood = req.body.blood
    const email = req.body.email

   //coloco valores dentro do array

    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/") 


}) 

//lugar o servidor e permitir o acesso na porta 3000
server.listen(3000, function () {
    console.log ("iniciei o servidor.")
})