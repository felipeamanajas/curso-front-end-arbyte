/* Faça um programa que pergunte ao usuário escolher duas opções A e B.
A encerra o programa, B é pra fazer uma soma.
a. Se o usuário inserir A o programa fecha
b. Se o usuário inserir B o programa vai realizar uma operação de soma,
solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
segundo número o algoritmo deve apresentar a soma e também pergunta se
quer realizar outro cálculo.
c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
que não entendeu o comando e solicitar novamente para inserir A ou B */

var rs = require('readline-sync')
var n1, n2

while (true) {
    var escolha = rs.question('ESCOLHA: Insira "A" para SAIR ou "B" para SOMAR: ').toUpperCase()
    if (escolha == 'A') {
        break;
    } else if (escolha == 'B') {
        n1 = rs.questionInt('Insira o primeiro numero: ')
        n2 = rs.questionInt('Insira o segundo numero: ')
        console.log(n1+n2)
    } else {
        console.log('Invalida, escolha: "A" para SAIR ou "B" para SOMAR: ')
    }
}
console.log('Fim da execução')