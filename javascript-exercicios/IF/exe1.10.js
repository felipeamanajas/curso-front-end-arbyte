/* Fazer um programa para receber um número e verificar se está entre 100 e 200.
Se estiver na faixa, imprimir:
Você digitou um numero entre 100 e 200.
Senão estiver na faixa, imprimir
Você digitou um numero fora da faixa entre 100 e 200. */

var rs = require('readline-sync')
var verificaNumero = rs.question('Insira um numero entre 100 e 200: ')

if (verificaNumero >= 100 && verificaNumero <= 200) {
    console.log ('Você digitou um numero entre 100 e 200.')
} else {
    console.log('Você digitou um numero fora da faixa entre 100 e 200.')
}

