//tagged templates - processa e separa oque esta dentro de uma funcao string
function tag(partes,...valores){
    console.log(partes)//aqui ele vai processar o que foi incluido la em baixo em tag no array
    console.log(valores)//aqui apenas os valores 
    return'Outra string'//em seguida vai imprimir isso
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno}esta${situacao}`)//usado o tag antes para atribuir a funcão esses parametros

