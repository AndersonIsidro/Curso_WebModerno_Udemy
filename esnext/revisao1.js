//let e const
{
    var a =2
    let b =3        
    console.log(b)
}
console.log(a)
//console.log(b) nao funciona pq a variavel let é uma variavel de escopo e nao global como var

//template string
const produto ="Ipad"
console.log(`${produto} é caro!!`)

//destructuring
const [l,e,...tras]="anderson"//aqui estou incluindo meu nome em um array constante
console.log(l,e,tras)

const [x, , y]=[10,2,35]
console.log(x,y)

const{idade:i,nome}={nome:'Ana',idade:9}//atributos de um objeto tem que usar chaves para desestruturar
console.log(i,nome)


//arrow function-sempre serao funcoes anonimas nao se pode atribuir um nome
const soma =(a,b) => a+b
console.log(soma(7,8))

//arrow function(this)
const lexico1 = ()=> console.log(this===exports)//this sempre vai apontar para exports em uma funcao
lexico1()

//parametros default()
function log(texto='Node'){//aderir um valor a uma funcao quando for acionada vem o valor padrao que foi definido
    console.log(texto)
}
log()//usando valor padrao
log("novo")//usando novo valor definido

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)//significa que para cada elemento do array acrescentar o que esta no total
    return total
}
console.log(total(1,5))

//ES8: Objet.values/Object.entries
const obj = {a:1,b:2,c:3}
console.log(Object.values(obj))//para imprimir valores do array
console.log(Object.keys(obj))//imprimir chaves do array
console.log(Object.entries(obj))//imprimir chaves e valores de um obj

//melhorias na notaçao literal

const pessoa= {
    nome:"Carla",
    ola(){
        return `Ola ${nome} tudo bem com você?`
    }

}
console.log(pessoa.ola())

//class
class Animal{}
    class Cachorro extends Animal{
        falar(){
            return 'au au'
        }
    }
const t = new Cachorro()
console.log(t.falar())