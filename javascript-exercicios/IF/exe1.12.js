/* Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo
seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos). */


var  rs = require('readline-sync')
var nome = rs.question('Insira seu nome: ')
var sexo = rs.question('Insira o seu sexo: F PARA FEMININO ou M PARA MASCULINO ')
var estadoCivil = rs.question('Insira o seu estado civil: 1 PARA CASADO(a) ou 2 para SOLTEIRO (a)')
var tempoDeCasamento = 0

if (sexo == 'F' && estadoCivil == '1') {
    tempoDeCasamento = rs.question('Insira o tempo de CASADO(a)')
    console.log(` Nome: ${nome}, Sexo: ${sexo}, Estado Civil: ${estadoCivil}, Tempo de casamento: ${tempoDeCasamento}`)
}


