/* Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
cars.json
O campo que define o país no cars.json é Origin
A comparação da string pode ser utilizada usando a palavra “Japan" */

var fs = require('fs')
var rs = require('readline-sync')

var carrosSerializados = fs.readFileSync('E:\\projetos\\arbyte\\logica\\LISTAS\\DATA\\cars.json');
var carros = JSON.parse(carrosSerializados)

var potenciaMinima = rs.questionInt('Insira a potencia em Horse Power (HP) de corte: ')

var carrosComPotenciaMinima = carros.filter( (carro) => {
	return carro.Origin > potenciaMinima;
})

console.log(carrosComPotenciaMinima)
console.log('Quantidade total encontrada: ', carrosComPotenciaMinima.length, )
