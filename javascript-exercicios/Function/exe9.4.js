/*
 
Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a
tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
...
N x N = N2

Após isso solicite o usuário um número e forneça o argumento do usuário para a
função. 

*/

var readLineSync = require("readline-sync")

function tabuadaDoN() {
    var nunN = readLineSync.questionInt('Digite um numero "N" ')
    var contador = 0
    while (contador<=nunN) {
        var resultado = nunN * contador
        console.log(contador, "x", nunN, "=", resultado)
        contador++
    }
}
tabuadaDoN()