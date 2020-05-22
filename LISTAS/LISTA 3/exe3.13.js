/* Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
a soma dos pares
EX: valores fornecidos 1,2,3,4,5
Impares -> 1 * 3 * 5 = 15
Pares -> 2 = 4 = 6
O programa imprime :
Produtos dos impares : 15
Soma dos pares : 6 */

var rs = require('readline-sync')
var numero = 0
var contador = 1
var soma = 0
var produto = 1

while (contador < 5) {
    numero = rs.questionInt('Insira um numero: ')
    if (numero % 2 == 0)
        soma = soma + numero

else {
    produto = produto * numero
}
contador++
}

console.log(`A soma dos pares é: ${soma}`)
console.log(`O produto dos impares: ${produto}`)
