const nome ="Rebeca";
const concatenacao ="Ola"+ nome +"!";
//outra forma de concatenar
const template = `
    Olá
    ${nome}!`;
    console.log(concatenacao,template);

    //expressoes concatenação
    console.log(`1+1=${1+1}`);

    //FUNCAO para letra maiusculo
    const up = s =>s.toUpperCase();
    console.log(`Ei... ${up('cuidado')}!`);
