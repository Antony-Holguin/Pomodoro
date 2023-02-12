document.addEventListener('DOMContentLoaded', iniciarApp);

const tareas = [];
const botonIniciar = document.querySelector('#iniciar').addEventListener('click', mostrarTarea);
const botonLimpiar = document.getElementById('boton-limpiar').addEventListener('click', limpiarTexto);

const input = document.getElementById('campo-texto');
var hora = 0;
var minuto = 25;
var segundo = 0;
var hms = document.querySelector('.palabra_contenedor').innerHTML=`00:${minuto}:${segundo}`;


function iniciarApp(){
    
}

function mostrarTarea(){
    const tarea = document.getElementById('campo-texto').value;
    tareas.unshift(tarea);
    const contenedorPrincipal = document.querySelector('.contenedor');
    const elemento = document.createElement('DIV');
    elemento.classList.add('parafo');
    elemento.innerHTML = `<p>${tarea}</p>`;
    contenedorPrincipal.appendChild(elemento);
    setInterval(()=>{
        segundo++;
        hms = document.querySelector('.palabra_contenedor').innerHTML=`00:${minuto}:${segundo}`;
        console.log(minuto);
        if(segundo==10){
            segundo=0;
            minuto++;
        }
        
    },1000);
        


}

function cronometro(){

}



function limpiarTexto(){
    input.value = "";
}
