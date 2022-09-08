//forma de criar produto de forma simples
const prod1 = {}
prod1.nome = 'Celular Ultra Mega';
prod1.valor = 4998.90;
prod1['Desconto Ledal']=0.40//evitar atributos com espaco

console.log(prod1);

//outra forma de criar um objeto ja passando os valores
const prod2={nome:'Camisa Polo',
            preco: 79.90 ,
                     }
    console.log(prod2);