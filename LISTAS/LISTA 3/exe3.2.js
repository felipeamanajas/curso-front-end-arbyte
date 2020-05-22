/* Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
usar o operador de multiplicação (*) */

var rs = require('readline-sync')
var primeiroFator = rs.questionInt('Insira o primeiro fator: ')
var segundoFator = rs.questionInt('Insira o segundo fator: ')
var contador = 0
var somatorio = 0

while(contador < primeiroFator) {
    somatorio = somatorio + segundoFator
    contador++
}

console.log(somatorio)


