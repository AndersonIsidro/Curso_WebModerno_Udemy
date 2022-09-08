//Factory simples-sempre retorna um objeto
function criarPessoa(){
    return{
        nome:'Ana',
        sobrenome:'Silva'
    }
}
console.log(criarPessoa())


function criarProduto(nome,preco){
    return{
    nome,
    preco,
    desconto:0.1
    }
}
console.log(criarProduto("Notebook",2199.99))
console.log(criarProduto("Tv",3159.99))