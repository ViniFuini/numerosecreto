const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Numero Secreto:',numeroSecreto)

const elemeentoMenorValor = document.getElementById('menor-valor')
elemeentoMenorValor.innerHTML = menorValor

const elemeentoMaiorValor = document.getElementById('maior-valor')
elemeentoMaiorValor.innerHTML = maiorValor