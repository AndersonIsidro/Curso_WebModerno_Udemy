//criar funcao de forma literal
function fun1(){}

//armazenar uma funcao em uma variavel
const fun2 = function(){}

//armazenar a funcao em um array
const array = [function(a,b){return a+b},fun1,fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj= {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()
}

run (function(){console.log('Executando...')})

//uma funcao pode retornar ou conter outra funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)//neste caso a primeira funcao no parentese primeiro e depois no outro