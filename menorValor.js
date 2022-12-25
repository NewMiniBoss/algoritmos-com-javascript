function menorValor(arr, posicaoInicial) {
    let livroBarato = posicaoInicial
    for (let i = posicaoInicial; i < arr.length; i++) {
        if (arr[i].preco < arr[livroBarato].preco) {
            livroBarato = i
        }
    }
    return livroBarato
}
module.exports = menorValor