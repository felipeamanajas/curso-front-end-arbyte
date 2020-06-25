/* Faça um programa que receba três notas, calcule e mostre a média aritmética entre
elas, caso a média aritmética seja:
Media maior ou igual a 7 imprimir :
ALUNO APROVADO
Media menor que 7 imprimir :
ALUNO REPROVADO */

var rs = require('readline-sync')
var primeiraNota = rs.questionFloat('Insira a primeira nota: ')
var segundaNota = rs.questionFloat('Insira a segunda nota: ')
var terceiraNota = rs.questionFloat('Insira a terceira nota: ')
var media = (primeiraNota + segundaNota + terceiraNota)/3

if (media >= 7){
    console.log('ALUNO APROVADO')
} else {
    console.log('ALUNO REPROVADO')
}