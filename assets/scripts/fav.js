var favs = [{ codigo: 2, nombre: 'Griselda Maria', apellidos: 'Escobar Escobar', edad: 25, correo: 'gescobar@gmail.com', profesion: 'Auditora' },
{ codigo: 4, nombre: 'Luis Eduardo', apellidos: 'Aguirre Aguirre', edad: 40, correo: 'laguirre@gmail.com', profesion: 'Contador' }];

var tbody = document.querySelector('.tabla tbody');

favs.forEach(function (contacto) {
    var fila = document.createElement('tr');
    fila.className = 'tabla-fila';
    fila.innerHTML = '<td>' + contacto.codigo + '</td>' +
        '<td>' + contacto.nombre + '</td>' +
        '<td>' + contacto.apellidos + '</td>' +
        '<td>' + contacto.correo + '</td>' +
        '<td class="botones">' + '<button>' + '<img class="fav" src="../../assets/resource/img/star.png" width="32px">' + '</button>' +
        '</td>';
    tbody.appendChild(fila);
});