const aplicarDescuento = new Promise((resolve, reject)=> {
    const descuento = false;
    if(descuento){
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
})


// Si yo entro a la api de la empresa y descargo los ultimos clientes
// una vez que se han descargado todos los clientes ese promise se cumplió
//  porque todos se descargaron.

// Si por algo intento entrar al sistema y esta caido el servidor

// console.log(aplicarDescuento);
// 3 valores posibles
//  fulfilled
// rejected
// pending

aplicarDescuento
            .then(resultado => {
                console.log(resultado)
            })
            .catch(rechazo => console.log(rechazo))