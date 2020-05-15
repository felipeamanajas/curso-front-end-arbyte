var rs = require('readline-sync');

var carro = {};

carro.marca = rs.question('Escolha a marca do seu automovel: ');
carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
carro.cor = rs.question('Escolha a a cor do seu automovel: ');

console.log(`seu automóvel é um ${carro.marca}, modelo ${carro.modelo}, de cor ${carro.cor}`)

