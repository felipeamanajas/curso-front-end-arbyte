/* Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
cars.json
O campo que define o país no cars.json é Origin
A comparação da string pode ser utilizada usando a palavra “Japan" */

var fs = require('fs')

var carrosSerializados = fs.readFileSync('E:\\projetos\\arbyte\\logica\\LISTAS\\DATA\\cars.json')
var carros = JSON.parse(carrosSerializados)

var origemFabricacao = carros.filter( (carros) => carros.Origin =='Japan')
console.log(origemFabricacao)
console.log('Quantidade total encontrada: ', origemFabricacao.length)

//"Origin": "Japan"