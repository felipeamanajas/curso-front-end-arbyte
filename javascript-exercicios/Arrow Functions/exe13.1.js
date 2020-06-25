//Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
//Utilize o campo Horsepower para descobrir qual é o mais potente

/*Crie um algoritmo que solicite um número para o usuário e diga quantos carros mais
potente que o valor informado.

Para isso utiliza a propriedade “Horserpower” do cars.json
DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no google.*/


var fs = require('fs')
var rs = require('readline-sync')

var carrosSerializados = fs.readFileSync('E:\\projetos\\arbyte\\logica\\LISTAS\\DATA\\cars.json');
var carros = JSON.parse(carrosSerializados)

var potenciaMinima = rs.questionInt('Insira a potencia em Horse Power (HP) de corte: ')

var carrosComPotenciaMinima = carros.filter( (carro) => {
	return carro.Horsepower > potenciaMinima;
})

console.log(carrosComPotenciaMinima)
console.log('Quantidade total encontrada: ', carrosComPotenciaMinima.length, )

