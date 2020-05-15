/*
Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
Solicite dois números para o usuário e forneça como argumento para esta função.
Escreva o resultado da função na tela dizendo qual menor número.
*/

var rs = require('readline-sync')
var n1 = 0
var n2 = 0
var n3 = 0

function QualEOMenorNumero(n1, n2) {
    n1 = rs.questionInt('Insira o primeiro numero')
    n2 = rs.questionInt('insira o segundo numero')

    if (n1 > n2) {
        n3 = n2
    } else if (n2 > n1) {
        n3 = n1
    } else console.log(`${n2} e ${n1} sao iguais.`)

    return n3 

}

console.log(`O menor numero e ${QualEOMenorNumero}`)