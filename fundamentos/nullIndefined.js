//esse caso retorna indefined porque nao inicializei a variavel com algum resultado
let valor;
console.log(valor);

//esse caso foi inicializada maisretorna null 
//porque esta variavel naoa adicionei valor a ela
valor = null;
console.log(valor);

const produto= {};
produto.preco = 3.50;
console.log(produto.preco);
produto.preco = null;//vc quis dizer que este produto esta sem preço
console.log(produto);
