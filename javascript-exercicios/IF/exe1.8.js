/* 8. Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
Equilátero, Isósceles ou Escaleno.
Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes. */

var readlineSync = require('readline-sync');

var medida_lado_1 = readlineSync.questionInt('Insira a medida do lado 1');
var medida_lado_2 = readlineSync.questionInt('Insira a medida do lado 2');
var medida_lado_3 = readlineSync.questionInt('Insira a medida do lado 3');

if (medida_lado_1 == medida_lado_2 || medida_lado_1 == medida_lado_3) {
   
    console.log('Este e um triangulo equilatero, pois tem 3 lados iguais ')

} else if (medida_lado_1 == medida_lado_2 != medida_lado_3 || medida_lado_1 != medida_lado_2 == medida_lado_3) {
    
    console.log('Este e um triangulo isoceles, pois tem 2 lados iguais ');

}  else if (medida_lado_1 != medida_lado_2 != medida_lado_3) {
    
    console.log('Este e um triangulo escaleno, pois não tem lados iguais ');
}
    

