const livros = require('./livros.json')
const menorValor = require('./menorValor')

livros.forEach((_, indice) => {
    menor = menorValor(livros, indice)

    let livroAtual = livros[indice]
    let livroMenor = livros[menor]

    livros[menor] = livroAtual
    livros[indice] = livroMenor

})
console.log(livros)