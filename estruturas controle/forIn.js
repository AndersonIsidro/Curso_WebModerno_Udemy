const notas = [6.7,7.4,9.8,8.1,7.7]

//percorrer o array acima com um forin abaixo
for(i in notas){
    console.log("indice",i,":",notas[i])
}

const pessoa = {
    nome:"Ana",
    sobrenome:'Silva',
    idade:29,
    peso:64
}
for( atributo in pessoa){
    console.log("Atributo",atributo,":",pessoa[atributo])
}