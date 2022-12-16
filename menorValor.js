function menorValor(arrayProduto, posicaoInicial) {
    // let maisBarato = posicaoInicial;
    // for (let i = posicaoInicial; i < arrayProduto.length; i++) {
    //     if (arrayProduto[i].preco < arrayProduto[maisBarato].preco) {
    //         maisBarato = i;
    //     }
    // }
    // return maisBarato;
    let maisBarato = posicaoInicial
    arrayProduto.forEach((_, indice) => {
        if(arrayProduto[indice].preco < arrayProduto[maisBarato].preco) {
            maisBarato = indice
        }
    });
    return maisBarato
}


module.exports = menorValor;
