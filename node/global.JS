//console.log(global) usar object.freeze para tornar um objeto global constante
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos Lugares!'
    },
    nome:'Sistema Legal'
})