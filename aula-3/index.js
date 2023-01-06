// var numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) =>{
//   return a - b;
// });
// console.log(numbers);

const livros = require('./array');
livros.sort((a, b) => {
    if (a.preco > b.preco) {
        return 1;
    } else {
        return -1;
    }
})

console.log(livros)