//AQUI FOI DECLARADA CONSTANTE GLOBAL
const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}
//AQUI FOI DECLARADA VALOR COMO LOCAL
function exec(){
const valor = 'Local'
minhaFuncao()
}
exec()