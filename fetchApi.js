function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url)
         .then(respuesta => respuesta.json())
         .then(resultados => mostrarDatos(resultados))
}

function mostrarDatos(resultados){
    for(resultado of resultados){
        let {author, post_url} = resultado;
        document.body.innerHTML +=`
         <p> ${author} </p>
         <a href="${post_url}">Imagen aqui</a>
        `
    }
}
