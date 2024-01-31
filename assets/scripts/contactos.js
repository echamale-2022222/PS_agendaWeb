var contactos = [{ codigo: 1, nombre: 'Juan Jose', apellidos: 'Garcia Blanco', edad: 15, correo: 'jgarcia@gmail.com', profesion: 'Soldador' },
                 { codigo: 2, nombre: 'Griselda Maria', apellidos: 'Escobar Escobar', edad: 25, correo: 'gescobar@gmail.com', profesion: 'Auditora' },
                 { codigo: 3, nombre: 'Stephany Naomi', apellidos: 'Lopez de la Cruz', edad: 22, correo: 'slopez@gmail.com', profesion: 'Cantante' },
                 { codigo: 4, nombre: 'Luis Eduardo', apellidos: 'Aguirre Aguirre', edad: 40, correo: 'laguirre@gmail.com', profesion: 'Contador' },
                 { codigo: 5, nombre: 'Alan Eduardo', apellidos: 'Lopez Hernandez', edad: 52, correo: 'alopez@gmail.com', profesion: 'Programador' }];

var tbody = document.querySelector('.tabla tbody');

contactos.forEach(function (contacto) {
    var fila = document.createElement('tr');
    fila.innerHTML = '<td>' + contacto.codigo + '</td>' +
        '<td>' + contacto.nombre + '</td>' +
        '<td>' + contacto.apellidos + '</td>' +
        '<td>' + contacto.correo + '</td>';
    tbody.appendChild(fila);
});
