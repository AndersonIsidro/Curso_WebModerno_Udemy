// settimeout vc passa uma função para ser executada depois do tempo selecionado
setTimeout(function(){
    console.log('Executando callback...')
    setTimeout(function(){
        console.log('Executando callback...')
        
    }, 3000);    
}, 2000);

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promisse...')
            resolve()
        },tempo)
    })
}
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
   