const notas= [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//sem calback pata pegar notas abaixo de 7 e exibir
let notasBaixas = []
for (let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback para fazer o mesmo procedimento e a funcao .filter filtra a funcao
//que for passada para ser utilizada em array e cria um novo array com filtro selecionado
const notasBaixas2 = notas.filter(function(nota){
    return nota<= 9
})
console.log(notasBaixas2)

//funcao callback com arrow
const notasBaixas3 =notas.filter(nota => nota <7)
console.log(notasBaixas3)

