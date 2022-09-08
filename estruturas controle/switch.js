const imprimirResultado = function (nota){
    switch(Math.floor(nota)) {
        case 10:case 9:
            console.log("aprovado")
            break
        case 8: case 7: case 6: case 5:
            console.log("passou raspando")
            break
        case 4: case 3:case 2: case 1: case 0:
            console.log("reprovado")
            break
            default:
            console.log("entrada invalida")

    }
}
imprimirResultado(3)