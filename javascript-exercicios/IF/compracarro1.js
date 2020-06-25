var rs = require('readline-sync');

// var carro ={}

function devolveCarro (){
var carro = {}
carro.marca = rs.question('Escolha a marca do seu automovel: ');
carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
carro.cor = rs.question('Escolha a a cor do seu automovel: ');
return carro
}

var automovel = devolveCarro()
// console.log(automovel) ou 

console.log("seu automóvel é um", automovel.marca, "de modelo", automovel.modelo, "cor", automovel.cor);
