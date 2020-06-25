/* Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)

Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
europa e depois disso aplicar a média em cima do campo Horsep */

var fs = require('fs')

var carrosSerializados = fs.readFileSync('E:\\projetos\\arbyte\\logica\\LISTAS\\DATA\\cars.json')
var carros = JSON.parse(carrosSerializados)

var origemFabricacao = carros.filter( (carros) => carros.Origin =='Europe')
console.log(origemFabricacao)
console.log('Quantidade total encontrada: ', origemFabricacao.length)

//"Origin": "Japan"