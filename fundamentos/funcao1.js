//Funcao sem retotno
function imprimirSoma(a,b){
    console.log(a+b);
}
imprimirSoma(2,3);

//Funcao com retorno - faz o calculo e 
//quando nao colocar o segundo dado ele entende ser o 0 que coloquei
function soma (a,b=1){
    return a+b
}
console.log(soma(2,3));
console.log(soma(2));