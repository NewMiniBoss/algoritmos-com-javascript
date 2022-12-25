function menorValor(arr, posicaoInicial) {
    let livroMaisBarato = posicaoInicial
    arr.forEach((_, indice) => {
        if (arr[indice].preco < arr[livroMaisBarato].preco) {
            livroMaisBarato = indice
        }
    })
    return livroMaisBarato
}
module.exports = menorValor