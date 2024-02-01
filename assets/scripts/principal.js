// Función para cargar en el iframe las demás paginas html

function cargarPagina(urlPag) {
    var iframe = document.getElementById('myFrame');
    iframe.src = urlPag;
    return false;
}