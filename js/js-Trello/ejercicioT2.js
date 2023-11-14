// Registro de notas de estudiantes: Tienes dos arrays, uno con nombres de estudiantes y otro con sus respectivas notas en un curso. Debes crear funciones que calculen el promedio de notas por estudiante y muestren un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso.

const estudiantes = [
  "Herrera, Facundo",
  "Arnedo, Emmanuel",
  "Alderete, Nazareno",
  "Mercado, Agustin",
];
const notas = [10, 8, 5, 7];

function promedioNotas() {
  let contador = 0;
  for (let i = 0; i < notas.length; i++) {
    contador += notas[i];
  }
  return contador / notas.length;
}

function mostrarEstudiantes() {
  document.write(`<br><h3>Lista de Estudiantes que aprobaron el curso:</h3>`);
  document.write(`<table><thead>`);
  document.write(`<tr>`);
  document.write(`<th>Nota</th><th>Estudiante</th>`);
  document.write(`<tr>`);
  document.write(`<thead><tbody>`);
  for (let i = 0; i < estudiantes.length; i++) {
    if(notas[i] > 6) {
        document.write(`<tr>`);
        document.write(`<td>${notas[i]}</td>`);
        document.write(`<td>${estudiantes[i]}</td>`);
        document.write(`<tr>`);
    }
  }
  document.write(`</tbody></table>`);

  document.write(`<br><h3>Lista de Estudiantes que reprobaron el curso:</h3>`);
  document.write(`<table><thead>`);
  document.write(`<tr>`);
  document.write(`<th>Nota</th><th>Estudiante</th>`);
  document.write(`<tr>`);
  document.write(`<thead><tbody>`);
  for (let i = 0; i < estudiantes.length; i++) {
    if(notas[i] < 7) {
        document.write(`<tr>`);
        document.write(`<td>${notas[i]}</td>`);
        document.write(`<td>${estudiantes[i]}</td>`);
        document.write(`<tr>`);
    }
  }
  document.write(`</tbody></table>`);  
}

document.write(`<h2>El promedio de notas por alumno es: "${promedioNotas()}"</h2>`);

mostrarEstudiantes();