/* Faça um programa que recebe um número e imprima todos os números pares de 0 até
o número inserido. */

var rs = require('readline-sync')
var numeroInserido = rs.question('Insira um numero')

var contador = 0

while(contador < numeroInserido){
    if (contador % 2 != 0){
    
    } else {
        console.log(contador)
    }
    contador++
}   