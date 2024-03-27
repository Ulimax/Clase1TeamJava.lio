async function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    try {
        const respuesta = await fetch(url);
        const resultados = await respuesta.json();
        mostrarDatos(resultados);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

function mostrarDatos(resultados) {
    resultados.forEach(resultado => {
        const {author, post_url} = resultado;
        document.body.innerHTML += `
            <p>${author}</p>
            <a href="${post_url}">Imagen aquí</a>
        `;
    });js
}
