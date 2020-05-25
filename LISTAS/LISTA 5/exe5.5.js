/* Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
Exemplo de tela de saída: */

console.log('\n Este algoritmo resolve o fatorial n! de um numero!')
var rs = require('readline-sync')

for (; true;) {
    var entrada = rs.questionInt(" \n Selecione uma opcao: \n Insira: 0 - SAIR \n Insira: 1 - RESOLVER \n ")

    if (entrada == 0) {
       break

    } else if (entrada == 1) {
        var fatorial = 1;
        var n = rs.questionInt("Insira o n!:")
        i = 1

        for (i = 1; i <= n; i++) {
            fatorial = fatorial * i;
        }
        console.log(fatorial);
        continue

    } else {
        console.log('Escolha uma das opcoes abaixo:')
    }
}









// var fatorial =1;
// var n = 5
// i = 1 

// for(i=1;i<=n;i++){
//   fatorial=fatorial*i;
// }
// console.log(fatorial);