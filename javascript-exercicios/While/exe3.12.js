/* Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
números fornecidos. */ 

var rs = require('readline-sync')

var contador = 1
var soma = 0
var media = 0

while(contador <= 15){
    var entrada = rs.questionFloat(`Insira o ${contador}o numero: `)
    soma = soma + entrada
    contador++
}

media = (soma/3)
console.log(`a média é ${media.toFixed(2)}`)

