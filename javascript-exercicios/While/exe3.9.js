/* Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB */

var rs = require('readline-sync')

var palavra = rs.question('Insira uma palavra: ')
var invertePalavra = ''
var tamanhoPalavra = palavra.length

while(tamanhoPalavra >= 0){
    invertePalavra = invertePalavra + palavra.charAt(tamanhoPalavra)
    tamanhoPalavra--
}
console.log(invertePalavra.toUpperCase())