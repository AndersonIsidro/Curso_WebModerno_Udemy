//forma simples de criar arrays
const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0],valores[3]);
console.log(valores[1]);
//adicionar algo ao array ja criado
valores[4]= 10;
console.log(valores);
console.log(valores.length);

//dessa forma pode criar com string numero e o que mais quiser
valores.push({id:3},false,null,'teste');
console.log(valores)

//retorna o ultimo valor do array e retira
console.log(valores.pop());

//para excluir um elemento
delete valores[0];

console.log(valores);

