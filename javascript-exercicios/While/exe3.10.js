/* . Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21
DICA: Você pode precisar usar a operação de módulo (a%b) */

var rs = require('readline-sync')
var numero = rs.question('Insira um numero: ')

var contador = 1
var resto = 0

while (contador <= numero) {
    resto = numero % contador 
    if (resto == 0){
        console.log(contador)
    }
contador++
}