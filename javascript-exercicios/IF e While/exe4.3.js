/* Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas: */
/*
*
**
* * *
* * * *
* * * * */

var rs = require('readline-sync');

var nLinhas = 0
var asterisco = ''

var nLinhas = rs.questionInt('Digite o numero de linhas: ')

var contador = 0
while(contador < nLinhas) {
    asterisco = asterisco + '*'
    contador++
    console.log(asterisco)
}