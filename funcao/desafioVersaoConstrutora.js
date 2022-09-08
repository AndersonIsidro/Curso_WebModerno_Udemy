function Pessoa(nome){
    this.nome=nome
    this.falar = function(){
        return `Meu nome é ${nome}`
    }
}
   const a1 = new Pessoa('Anderson')
   console.log(a1.falar())