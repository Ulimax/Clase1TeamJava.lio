const paises = ["francia", "españa", "portugal", "Australia", "Inglaterra"];

function nuevopais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach( pais => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises();

nuevopais("Alemania", mostrarPaises);