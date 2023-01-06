const livros = require('./arrayOrdenado')
livros.sort((a, b) => {
    if (a.preco < b.preco) {
        return -1;
    } else {
        return 1;
    }
})
console.log(livros);