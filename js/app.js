document.addEventListener("DOMContentLoaded",()=>{
    iniciarApp();
});
//Declaraciond de variables
const contenedor = document.querySelector('.contenedor');
function iniciarApp(){
    crearContenedores();
}

function crearContenedores(){
    var contenedoruno = document.createElement('DIV');
    contenedoruno.classList.add('bloqueRojo');
    contenedor.appendChild(contenedoruno);

    var contenedorDos = document.createElement('DIV');
    contenedorDos.classList.add('bloqueNaranja');

    contenedor.appendChild(contenedorDos);

    var contenedorTres = document.createElement('DIV');
    contenedorTres.classList.add('bloqueVerde');
    contenedor.appendChild(contenedorTres);

    var contenedorCuatro = document.createElement('DIV');
    contenedorCuatro.classList.add('bloqueNegro');
    contenedor.appendChild(contenedorCuatro);

    anadirTexto();

}


function anadirTexto(){
    var textoContenedorUno = document.querySelector('.bloqueRojo');
    textoContenedorUno.textContent = 'alvsksfkafasfasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss';
}