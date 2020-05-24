/* Escreva um programa que calcule a soma de todos os múltiplos de 3
e de 5 entre 1 e 1000. */

var n1 = 1
var n2 = 1000

var listaDosMultiplos = 0

while (n1 <= n2) {
    if (n1 % 3 == 0) {
        listaDosMultiplos = listaDosMultiplos + n1;

    } else if (n1 % 5 == 0) {
        listaDosMultiplos = listaDosMultiplos + n1;
    }
    n1++
}

console.log('Total:', listaDosMultiplos)

//como exibir os números que estão sendo somados?
