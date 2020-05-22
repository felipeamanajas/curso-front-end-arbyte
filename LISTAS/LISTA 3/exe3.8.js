/* Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime:
MAÇÃ */ 

var rs = require('readline-sync')

var palavra = rs.question('Insira uma palavra').toUpperCase()
var separaEmStrings = palavra.split('')
contador = 0

while(contador < palavra.length){
    console.log(separaEmStrings[contador])
    contador++
}

