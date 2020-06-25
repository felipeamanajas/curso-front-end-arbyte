// let salario = 1000
 
// while (salario < 5000) {
//   salario += 100
 
//   console.log(`O salário ainda é $`)
// }

// let contador = 0
 
// while (contador < 50) {
//   console.log(`repetição nr $`)
 
//   contador++
// }

// const cores = [
//     'Verde',
//     'Amarelo',
//     'Azul',
//     'Branco'
//   ]
   
//   let index = 0
   
//   while (index < cores.length) {
//     console.log(index, cores[index])
//     index++
//   }

//-------------------

//   const produtos = [
//     { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
//     { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
//     { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
//   ]
   
//   let total = 0
//   let index = 0
   
//   while (index < produtos.length) {
//     const { valor, quantidade } = produtos[index]
   
//     total += valor * quantidade
//     index++
//   }
   
//   console.log(total)
//   // 121.3


  //--------------------

  const carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 }
  ]
   
  let total = 0
  let index = 0
   
  while (index < carros.length) {
    total += carros[index].preco
    index++
  }
   
  // converte o número para o padrão monetário
  const valorFinal = Number(total).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
   
  console.log(valorFinal)
  // R$ 76,000.00
  