const livros = require('./livros.json');
const troca = require('./troca')
function insertionSort(lista) {
    for (let i = 0; i < lista.length; i++) {
        let analise = i;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            troca(lista, analise)
            analise --;
        }
    }
    console.log(livros);
}

insertionSort(livros)