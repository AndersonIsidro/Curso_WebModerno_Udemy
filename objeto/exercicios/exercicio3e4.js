function calculoSalarioMes(horasTrabalhadas,porHora){
    calculo = horasTrabalhadas*porHora
    console.log(`Salario igual a R$${calculo} ao mês!`)}
    calculoSalarioMes(150,40.5)

    //exercicio4
    function nomeMes(a){
        switch(a){
        case 1:
            console.log("Janeiro")
            break
        case 2:
            console.log("Fevereiro")
            break
        case 3:
            console.log("Março")
            break
        case 4:
            console.log("Abril")
            break
        case 5:
            console.log("Maio")
            break
        case 6:
            console.log("Junho")
            break
            default:
                console.log("entrada invalida!")
        }

    }
    nomeMes(7)
