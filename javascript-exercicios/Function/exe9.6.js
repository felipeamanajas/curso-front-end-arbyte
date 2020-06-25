/*
Escreva uma função que receba dois números o primeiro será a base e o segundo a
potência e no final a função retorna a base elevada pela potência.
Faça um programa que peça ao usuário a base e a potência e forneça para a função,
no final imprima o resultado.
OBS: O algoritmo só precisa saber lidar com números inteiros.
*/

var rs = require('readline-sync');

    function calculoDePotencia(base,potencia){
            var base = rs.questionInt("Insira a base");
            var potencia = rs.questionInt("Insira a potencia");
            var resultado = 1
            
            while (potencia > 0) {
                resultado = resultado * base
                potencia--
            }
            console.log("Resultado", resultado)
    }

    calculoDePotencia()