/* Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
essa idade expressa em dias.

Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
utilizando a função criada. */

var readlineSync = require('readline-sync')
var totalDias

function converteDataEmDias() {
    var totalDias = ((ano * 365) + (mes * 30) + (dia * 1))
    return totalDias
}

ano = readlineSync.questionInt("insira o ano ")
mes = readlineSync.questionInt("insira o mes ")
dia = readlineSync.questionInt("insira o dia ")


console.log(converteDataEmDias())



