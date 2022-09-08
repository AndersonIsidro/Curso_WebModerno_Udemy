const tecnologias = new Map()
    tecnologias.set('react',{framework: false})
    tecnologias.set('angular',{framework: true})

    console.log(tecnologias.get('react'))
    console.log(tecnologias.get('angular'))

    const chavesVariadas = new Map([
        [function(){},'Função'],//cada linha um elemento do map 
        [{},'Objeto'],
        [123,'Numero'],
    ])

    chavesVariadas.forEach((vl,ch) =>{//essa função para imprimir tudo do map acima
        console.log(ch,vl)
    })
    console.log(chavesVariadas.has(123))//para saber se tem este dado detro do map selecionado v ou f
    chavesVariadas.delete(123)
    console.log(chavesVariadas.has(123))
    console.log(chavesVariadas.size)//saber quantos elementos tem no map
