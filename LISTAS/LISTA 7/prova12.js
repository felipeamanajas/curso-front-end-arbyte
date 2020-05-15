// O que a seguinte função vai imprimir no console?

/* 

function funcaoEstranha( x , y ) {
    return x
}
console.log(funcaoEstranha(5,10))

*/

// Dada a função da imagem qual afirmativa esta correta?

 /*

 function funcaoAtividade(x) {
     console.log('teste')
     while(x<10){
         x++
     }
 }

 */

 function ehpar(x) {
    return x % 2 !==0
 }
 var numero  = ehpar(6)
 if(numero){
     console.log('É par');
} else {
    console.log("Não é par")
}