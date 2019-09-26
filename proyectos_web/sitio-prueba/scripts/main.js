
var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/mozilla.jpeg') {
      miImage.setAttribute('src','images/mozilla.jpg');
    } else {
      miImage.setAttribute('src', 'images/mozilla.jpeg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla te da la bienvenida, ' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}