var fs = require('fs')
var caminhoObjeto = "data/carro.json"
var objetoDes = fs.readFileSync(caminhoObjeto)
var carro = JSON.parse(objetoDes)

console.log(carro)