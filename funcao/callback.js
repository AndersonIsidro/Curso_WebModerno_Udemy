const fabricantes =['mercedes','audi','bmw']
const lojasFamosas=["","Lacoste","Polo",'Gulcci','Tommy','Mizuno']

//função sem passar nada apenas pra pegar um array e exibir como nome e indice
function imprimir(nome,indice){
    console.log(`${indice+1},${nome}`)
}
//chamando array+função para exibir ele
fabricantes.forEach(imprimir)
lojasFamosas.forEach(imprimir)
