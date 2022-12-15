// livros
const livros = [25, 15, 30, 50, 45, 20]
// guardando os valores do for
let valorLivroBarato = 0
let indiceLivroBarato = 0
// for
livros.forEach((item, indice) => {
    if (livros[indice] < livros[indiceLivroBarato]) {
        indiceLivroBarato = indice
        valorLivroBarato = item
    }
})
// console no valor do indice do livro masi barato
console.log(`o livro mais barato custa ${valorLivroBarato}`)