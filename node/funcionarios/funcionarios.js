const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//saber todos que são da China
const chineses= f => f.pais === 'China'

//pegar todos funcionarios que são mulheres
const mulheres = f => f.genero ==='F'
//pegar o funcionario com menor salario
const menorSalario = (func,funcAtual)=>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios= response.data
    console.log(funcionarios)

    //filtrar mulher chinesa com menor salario
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})