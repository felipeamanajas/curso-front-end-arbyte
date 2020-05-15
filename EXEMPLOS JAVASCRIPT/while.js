function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min // random gera um número aleatório entre 0 e 1
    return Math.floor(valor) // floor arredonda o número
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}