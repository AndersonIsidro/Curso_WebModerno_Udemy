class Validator{
    constructor(){
        this.validations=[
            'data-min-length'

        ]
    }
    //iniciar a validação de todos campos
    validate(form){
        //pegar os inputs
        let inputs = form.getElementsByTagName('input')

        //TRANSFORMO UMA HTML COLECTION EM UM ARRAY
        let inputsArray = [...inputs];
        //loop nos inputs e validação mediante ao que for encontrado 
        inputsArray.forEach(function(input){

            //loop wm todas validaçoes existentes
            for(let i = 0;this.validations.lenght>i;i++){
                if(input.getAttribute(this.validations[i])!=null){
                    //limpando a string para virar um metodo
                    let method = this.validations[i].replace('data-','').replace('-','')

                    //valor do input
                    let value = input.getAttribute(this.validations[i])
                    //invocar o metodo
                    this[method](input,value)


                }
            }
        },this)
        }
        //verifica se o input tem um num min de caracterer
        minlenght(input,minValue){
            let inputLength = input.value.lenght

            let errorMessage = `O campo precisa ter pelo menos ${minValue}caracteres`
            if(inputLength < minValue){
                this.printMessage(input,errorMessage)
            }

        }
        //metodo para imprimir msg de erro na tela
        printMessage(input,msg){
            let template = document.querySelector('.error-validation').cloneNode(true)
            template.textContent = msg
            let inputParent = input.parentNode

            template.classList.remove('template')

        }
}



let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")

let validator =new Validator()

//evento que dispara as validações
submit.addEventListener('click',function(e){
    e.preventDefault()

    validator.validate(form)
})