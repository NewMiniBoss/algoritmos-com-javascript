const livros = require('./livros.json')

function retornaMenorPreco(arr) {
    let livroMaisBarato = 0
    arr.forEach((_, indice) => {
        if (arr[indice].preco < arr[livroMaisBarato].preco) {
            livroMaisBarato = indice
        }
    })
    return livroMaisBarato
}

console.log(`O livro mais barato é ${livros[retornaMenorPreco(livros)].titulo}`)