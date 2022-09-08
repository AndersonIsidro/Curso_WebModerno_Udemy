
function tratarErroELancar(erro){
    
    throw"erro de processamento , desculpe"
    
}
function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase()+"!!!")
    }catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('FIM')
    }
}

const obg = {nome:"Roberto"}
imprimirNomeGritado(obg)

