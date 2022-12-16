// livros
const livros = require('./livros.json')
// guardando os valores do for
let valorLivroBarato = 0
let indiceLivroBarato = 0
let tituloDoLivroBarato = '';
// for (let i = 0; i < livros.length; i++) {
//     if (livros[i].preco < livros[indiceLivroBarato].preco) {
//         indiceLivroBarato = i
//         valorLivroBarato = livros[indiceLivroBarato].preco
//         tituloDoLivroBarato = livros[indiceLivroBarato].titulo
//     }
// }
livros.forEach((item, indice) => {
    if (livros[indice].preco < livros[indiceLivroBarato].preco) {
        indiceLivroBarato = indice
        valorLivroBarato = item.preco
        tituloDoLivroBarato = livros[indiceLivroBarato].titulo
    }
})
// console no valor do indice do livro masi barato
console.log(`o livro mais barato custa ${valorLivroBarato} e o titulo é ${tituloDoLivroBarato}`)