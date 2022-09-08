const saudacao = 'Opa'//contexto lexico 1

function exec(){
    const saudacao= 'Fala'//contexto lexico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares chave/valor
const cliente = {
    nome:'Pedro',
    idade:32,
    peso:90,
    endereco:{
        rua: 'rua muito top',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)