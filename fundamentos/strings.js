const escola = "Coder";
//imprimir o indice que quiser em uma string
console.log(escola.charAt(4));
console.log(escola.charAt(0));
//pesquisar pelo indice e imprimir pela tabela unicode
console.log(escola.charCodeAt(3));
//para imprimir do indice escolhido para frente
console.log(escola.substring(1));
console.log('Escola'.concat(" "+ escola).concat(" !!!!!"));
//substituir o indice selecionado por esse dentrop de parenteses
console.log(escola.replace(0,"E"));
//forma de criar um array
console.log('Ana,Maria,Pedro'.split(','))