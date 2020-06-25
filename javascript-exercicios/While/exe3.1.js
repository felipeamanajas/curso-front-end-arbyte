/* Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
de acordo com o número inserido.
EX: usuário inseriu 3
O programa imprime:
BIP BIP
BIP BIP
BIP BIP */

var rs = require('readline-sync')
var numeroDeBipBip = rs.questionInt('Insira o numero de vezes que que aparecera a mensagem "BIP BIP"')
var impressao = 0

while(impressao <= numeroDeBipBip) {
    console.log('BIP BIP')
    impressao++
}

