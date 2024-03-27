const paises = []


const nuevoPais = (Pais) => new Promise(resolve => {
        setTimeout(() => {
            paises.push(Pais);
            resolve(`Agregado ${Pais}`)
        }, 3000);
    })


nuevoPais('Alemania')
    .then(resultado=>{ 
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Francia')
    })
    .then(resultado=>{ 
        console.log(resultado)
        console.log(paises)
        return nuevoPais('Inglaterra')
    })
    .then(resultado=>{ 
        console.log(resultado)
        console.log(paises)
        return nuevoPais('México')
       
    })
    .then( resultado =>{
        console.log(resultado)
        console.log(paises)
    })