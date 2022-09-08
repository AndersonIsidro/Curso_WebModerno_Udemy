//CLOSURE É O ESCOPO CRIADO QUANDO UMA FUNCAO É DECLARADA
//esse escopo permite a funçãp acessar e manipular variaveis externas a função

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())