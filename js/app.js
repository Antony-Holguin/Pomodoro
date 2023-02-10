document.addEventListener('DOMContentLoaded', iniciarApp);

const tareas = [];
const boton = document.querySelector('#iniciar').addEventListener('click', mostrarTarea);

function iniciarApp(){
    mostrarTarea();
}

function mostrarTarea(){
    const tarea = document.getElementById('input-texto').value;
    tareas.unshift(tarea);
    const contenedorPrincipal = document.querySelector('.contenedor');
    const elemento = document.createElement('DIV');
    elemento.classList.add('parafo');
    elemento.innerHTML = `<p>${tarea}</p>`;
    contenedorPrincipal.appendChild(elemento);

    setTimeout(elemento.classList.remove(),5000);
}
