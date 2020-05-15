/* 7. Faça um programa que pergunte ao usuário escolher duas opções A e B.
A encerra o programa, B é pra fazer uma soma.
a. Se o usuário inserir A o programa fecha

b. Se o usuário inserir B o programa vai realizar uma operação de soma,
solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
segundo número o algoritmo deve apresentar a soma e também pergunta se
quer realizar outro cálculo.

c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
que não entendeu o comando e solicitar novamente para inserir A ou B */

/* 
cont read = require('readline-sync')

var option ='';

while (option != A){
    
    option = read.question(' A - ENCERRAR O PROGRAMA \n B - REALIZAR SOMA');
    
    if ((option != 'A') || (option != 'B')) {
        console.log('Essa opção não está disponível');
        option = read.question('A ENCERRAR O PROGRAMA \n - REALIZAR SOMA:');
        
    }
} */

//ALTERNATIVA A

var read = require('readline-sync') //VERIFICAR POR QUE NÃO CONSIGO UTILIZAR O CONST, SÓ CONSIGO USAR COMO VAR

var option ='';

while (option != 'A'){
    
    option = read.question(' A - ENCERRAR O PROGRAMA \n B - REALIZAR SOMA');
    
    if ((option != 'A') || (option != 'B')) {
        console.log('Essa opção não está disponível');
        option = read.question('A ENCERRAR O PROGRAMA \n - REALIZAR SOMA:');
    }
}


