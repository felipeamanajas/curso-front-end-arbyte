var rs = require('readline-sync');
var fs = require('fs');

function devolveCarro() {
    var carro = {};
    carro.marca = rs.question('Qual a marca do automovel: ');
    carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
    carro.cor = rs.question('Escoha a cor do seu automovel: ');
    return carro;
}
// var automovel = devolveCarro();
// console.log("Seu automovel é um", automovel.marca, "de modelo", automovel.modelo, "de cor", automovel.cor);
// var automovelEmString = JSON.stringify(automovel);
// var caminhoDoArquivo = './data/carro.json';
// fs.writeFileSync(caminhoDoArquivo, automovelEmString);
var caminhoObj = "data/carro.json"
var objDes = fs.readFileSync(caminhoObj)
var garagem = JSON.parse(objDes)

// console.log(carro)

// var garagem = []

while (true) {
    var resp = rs.keyInYN('Voce deseja adicionar outro carro ? : ')
    if (resp == true) {
        var carroNovo = devolveCarro()
        garagem.push(carroNovo)
        var garagemjson = JSON.stringify(garagem);
        var caminhoDoArquivo = 'carro.json';
        fs.writeFileSync(caminhoDoArquivo, garagemjson);
    } else{

        console.log(garagem)
        break
    }
}