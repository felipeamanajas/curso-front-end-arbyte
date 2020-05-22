/* Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
transforme ela em maiúscula
EX: abelha
O algoritmo imprime
AbelhA */

let rs = require('readline-sync')
let entradaUsuario = rs.question('Insira uma palavra: ')
let resultado = ''

for (i = 0; i < entradaUsuario.length; i++) {
    letra = entradaUsuario.charAt(i)

    if (letra =='a') {
        resultado = resultado + letra.toUpperCase()
    } else {
        resultado = resultado + letra
    }
}
    
console.log(resultado)
