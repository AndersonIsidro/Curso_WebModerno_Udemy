//recurso es2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//significa tire nome e idade do objeto pessoa acima e atribua a uma constante
const {nome, idade}=pessoa
console.log(nome,idade)

const{nome:n,idade:i}= pessoa
console.log(n,i)

const{sobrenome,bemhumorada = true}= pessoa
console.log(sobrenome,bemhumorada)

const{endereco:{logradouro,numero}}= pessoa
console.log(logradouro,numero)