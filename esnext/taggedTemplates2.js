function real(partes,...valores){
    const resultado = []
    valores.forEach((valor,indice) => {
        valor = isNaN(valor)? valor : `R$${valor.toFixed(2)}`//aqui sig que se valor nao estiver nenhum valor associado mostrar o vlor e se estiver algum valor mostrar em duas casas decimais
    resultado.push(partes[indice],valor)
    })
    return resultado.join('')
}
const preco =29.99
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`)