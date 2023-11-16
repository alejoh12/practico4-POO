// Objeto "Lista de Tareas": Crea un objeto listaTareas con una propiedad tareas que sea un array de tareas, y métodos como agregarTarea, completarTarea y listarTareas que realicen acciones sobre la lista de tareas.

let listaTareas = {
  tareas: ["tarea1", "tarea2"],
  agregarTarea: function (cadena) {
    this.tareas.push(cadena);
  },
  completarTarea: function (indice) {
    console.log(`Tarea ${this.tareas[indice]} terminada.`);
    document.write(`<p>Tarea "${this.tareas[indice]}" terminada.</p>`);
    this.tareas.splice(indice, 1);
  },
  listarTarea: function () {
    document.write(`<h2>Lista de Tareas</h2>`);
    document.write(`<ul>`);
    this.tareas.map((tarea) => document.write(`<li>${tarea}</li>`));
    document.write(`</ul>`);
  },
};

listaTareas.listarTarea();

listaTareas.agregarTarea("Limpiar casa.");

listaTareas.listarTarea();

listaTareas.completarTarea(0);

listaTareas.listarTarea();