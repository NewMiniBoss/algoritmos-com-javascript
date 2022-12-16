const livros = require('./livros.json')
const menorValor = require('./menorValor')
// for (let i = 0; i < livros.length; i++) {
//     let menor = menorValor(livros, i)
//     let livrosAtuais = livros[i]
//     let livroMenorPreco = livros[menor]
//     livros[i] = livroMenorPreco
//     livros[menor] = livrosAtuais
// }
livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
})

console.log(livros)