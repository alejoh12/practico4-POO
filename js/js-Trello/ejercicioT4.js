// Gestión de proyectos en una empresa: Tienes dos arrays, uno para los nombres de proyectos y otro para los estados de los proyectos. Debes crear funciones que permitan agregar nuevos proyectos, cambiar el estado de un proyecto, asignar un responsable y generar un resumen de proyectos en curso.

const nombresProyectos = ["Cancha Futbol", "Piscina", "Cacino", "Edificio"];
const estadosProyectos = ["en curso", "en curso", "terminado", "en curso"];
const responsablesProyectos = ["Juan", "Juan", "Marcos", "Marcos"];

function agregarProyecto(nombre, estado, responsable) {
  nombresProyectos.push(nombre);
  estadosProyectos.push(estado);
  responsablesProyectos.push(responsable);
}
function modificarProyecto(numero, estado, responsable) {
  estadosProyectos[numero] = estado;
  responsablesProyectos[numero] = responsable;
}
function resumenProyectos() {
  document.write(`</tbody></table>`);
  document.write(`<h2>Proyectos en Curso:</h2>`);
  document.write(`<table><thead>`);
  document.write(`<tr>`);
  document.write(`<th>Nombre</th><th>Responsable</th><th>Estado</th>`);
  document.write(`<tr>`);
  document.write(`<thead><tbody>`);
  for (let i = 0; i < nombresProyectos.length; i++) {
    if (estadosProyectos[i] === "en curso") {        
        document.write(`<tr>`);
        document.write(`<td>${nombresProyectos[i]}</td>`);
        document.write(`<td>${responsablesProyectos[i]}</td>`);
        document.write(`<td>${estadosProyectos[i]}</td>`);
        document.write(`<tr>`);
    }
  }
  document.write(`</tbody></table>`);
}

agregarProyecto("Casa Hogar","terminado","Luis");

modificarProyecto(4,"en curso","Luis");

resumenProyectos();
