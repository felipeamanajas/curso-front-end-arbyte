

var rs = require('readline-sync');
var alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVXYZABC'; // ['A', 'B', 'C', 'D', ... 'Z']


var querCriptografar = rs.keyInYN('Quer cripitografar (Y) ou Quer descriptografar (N)? ');
console.log(querCriptografar)


if (querCriptografar) {
    // criptografa
    var palavra = rs.question('Insira uma palavra para criptografar: ').toLocaleUpperCase().split('');
    console.log(palavra); //verificar

    for (var i = 0; i < palavra.length; i++) {
         var letra = palavra[i];
         var indiceNoAlfabeto = alfabeto.indexOf(letra);
         console.log(letra, indiceNoAlfabeto);
         var indiceNovo = indiceNoAlfabeto  + 3;
         palavra[i] = alfabeto.charAt(indiceNovo);
    }
    console.log('Palavra crifrada: ', palavra.join(''));

} else {
    //descriptografar
    var palavra = rs.question('Insira uma palavra para descriptografar: ').toLocaleUpperCase().split('');
    
    for (var i = 0; i < palavra.length; i++) {
        var letra = palavra[i];
        var indiceNoAlfabeto = alfabeto.indexOf(letra, 3);
        console.log(letra, indiceNoAlfabeto);
        var indiceNovo = indiceNoAlfabeto  - 3;
        palavra[i] = alfabeto.charAt(indiceNovo);
   }
   console.log('Palavra crifrada: ', palavra.join(''));

}