/* Escreva um programa que calcule a soma de todos os múltiplos de 3
e de 5 entre 1 e 1000. */

var n1 = 1
var n2 = 1000
var soma = 0
var listaDosMultiplos = []

while (n1 <= n2) {
    if (n1 % 3 == 0 && n1 % 5 == 0) {
        listaDosMultiplos.push(n1)
        soma = soma + n1;
    }
    n1++
}

console.log(`A soma de ${listaDosMultiplos}, resulta em ${soma}`)