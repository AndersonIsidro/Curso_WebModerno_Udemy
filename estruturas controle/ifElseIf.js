Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <=fim
}
const imprimirResultado = function(nota){
    if(nota.entre (9,10)){
        console.log("aprovado, nota:"+nota)
    }else if(nota.entre (7,8.99)){
        console.log("aprovado, nota:"+nota)
    }else if(nota.entre (5,6.99)){
        console.log("aprovado, nota:"+nota)
    }else if(nota.entre (3,4.99)){
        console.log("reprovado, nota:"+nota)
    }else if(nota.entre (1,2.99)){
        console.log("reprovado, nota:"+nota)
    }else{
        console.log("nota invalida")
    }
    console.log("fim")
}

imprimirResultado(7.9)