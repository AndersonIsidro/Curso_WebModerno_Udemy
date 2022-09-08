//operador rest(juntar)/spread(espalhar)
//usar rest com parametro de funcao

//usar spread com objeto
const funcionario = {nome:'Maria'.toUpperCase(),salario:1859.66}
const clone = {...funcionario}//ele copia os dados de uma constante 

console.log(funcionario)
console.log(clone)

//usar spread com array
const grupoA = ['Joao','Pedro','Gloria']
const grupoFinal = ['Maria' ,...grupoA,'Rafaela']//espalhando um array no meio do outro
console.log(grupoFinal)