/* Crie um algoritmo que conte quantos carros da Ford existem no cars.json. */

var fs = require('fs')

var carrosSerializados = fs.readFileSync('E:\\projetos\\arbyte\\logica\\LISTAS\\DATA\\cars.json')
var carros = JSON.parse(carrosSerializados)

var fabricacao = carros.filter( (carros) => carros.Car.includes('Ford'))
console.log(fabricacao)
console.log('Quantidade total encontrada: ', fabricacao.length)

//"Origin": "Japan"