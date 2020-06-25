/* Faça um programa que calcule a potência (potenciação) de um número.
Para isso ele deve receber dois números de entrada: o primeiro número é a base da
potência, o segundo número será a potência.
EX: usuário inseriu 2 para base e 4 para potência.
O programa imprime :
16
Lembrando: 2​4 ​= 2*2*2*2 */ 

var rs = require('readline-sync')

var base =  rs.questionInt('Insira a base:')
var expoente =rs.questionInt('Insira o expoente: ')

var i = 0 
multiplicador = 1

while(i < expoente) {
    multiplicador = multiplicador * base
    i++
}
console.log(multiplicador)