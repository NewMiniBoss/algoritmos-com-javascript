const livros = require('./livros.json')
function insertionSort(lista) {
    for (let i = 0; i < lista.length; i++) {
        let analise = i;
    }
    console.log(lista)
}

function insertionSortForEach(lista) {
    lista.forEach((item, indice) => {
        let analise = indice
        console.log(item.titulo, analise)
    })
}
insertionSortForEach(livros)