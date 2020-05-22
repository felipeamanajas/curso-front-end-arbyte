/* Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
negativo, imprimindo o resultado. */

var rs =require('readline-sync')
var numero = rs.question('Insira um numero: ')
var multiplica

if( numero > 0) {
    multiplica = numero * 2
    console.log(` O numero inserido é positivo, e seu dobro é ${multiplica}`)
} else {
    multiplica = numero * 3
    console.log(`O resultado e negativo, e o seu triplo é ${multiplica}`)
}

