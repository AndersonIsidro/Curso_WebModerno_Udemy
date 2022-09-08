function Carro(velocidadeMaxima = 200,delta = 5){
    let velocidadeAtual = 0
    let velocidadeMinima = 0

    this.acelerar = function(){
     if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
    }else{
        velocidadeAtual = velocidadeMaxima
    }
    this.frear = function(){
        if(velocidadeAtual - delta <=velocidadeAtual ){
            velocidadeAtual -= delta
        }else{
            velocidadeAtual = velocidadeAtual
        }
    }
}

this.getVelocidadeAtual = function(){
    return velocidadeAtual
}
}
const fusca = new Carro
fusca.acelerar()
fusca.acelerar()
fusca.frear()
fusca.frear()

console.log(fusca.getVelocidadeAtual())

const ferrari = new Carro(300,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.frear()
console.log(ferrari.getVelocidadeAtual())
