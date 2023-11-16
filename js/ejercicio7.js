/*
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
● existeContacto(Contacto): indica si el contacto pasado existe o no.
● listarContactos(): Lista toda la agenda
● buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
● agendaLlena(): indica si la agenda está llena.
● huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y por consola.
*/

class Contacto {
  constructor(nombreParam, telefonoParam) {
    this.nombre = nombreParam;
    this.telefono = telefonoParam;
  }
}

class Agenda {
  #contactos;
  constructor(contactosParam) {
    this.#contactos = contactosParam;
  }

  get contactos() {
    return this.#contactos;
  }
  set contactos(nuevosContactos) {
    this.contactos = nuevosContactos;
  }

  añadirContacto(contacto) {
    if (this.contactos.length < 10) {
      this.contactos.push(contacto);
    } else {
      document.write(
        `<h2>Ya no se puede seguir agregando contactos en la agenda, ya está llena.</h2>`
      );
    }
  }
  existeContacto(contacto) {
    let bandera = false;

    this.contactos.map((persona) => {
      if (persona.nombre === contacto.nombre) {
        bandera = true;
      }
    });

    if (bandera) {
      document.write(`<h2>El contacto pasado SI existe</h2>`);
    } else {
      document.write(`<h2>El contacto pasado NO existe</h2>`);
    }
  }
  listarContacto() {
    document.write(`
        <h2>Contactos</h2>
        <ul>
        `);
    for (let i = 0; i < this.contactos.length; i++) {
      document.write(`
            <li>Nombre: "${this.contactos[i].nombre}". Número: "${this.contactos[i].telefono}"</li>
            `);
    }
    document.write(`</ul>`);
  }
  buscarContacto(nombre) {
    let bandera = true;
    this.contactos.map((persona) => {
      if (persona.nombre === nombre) {
        document.write(
          `<p>El número del contacto buscado es: "${persona.telefono}"</p>`
        );
        bandera = false;
      }
    });

    if (bandera) {
      document.write(`<p>El contacto buscado no fue encontrado.</p>`);
    }
  }
  eliminarContacto(contacto) {
    let bandera = true;
    let contador = 0;
    let indice;
    this.contactos.map((persona) => {
      if (persona.nombre === contacto.nombre) {
        indice = contador;
        bandera = false;
        document.write(
          `<p>El contacto "${contacto.nombre}" ha sido eliminado.</p>`
        );
      }
      contador++;
    });
    this.contactos.splice(indice, 1);

    if (bandera) {
      document.write(
        `<p>El contacto "${contacto.nombre}" no ha sido eliminado. No ha sido encontrado en la agenda.</p>`
      );
    }
  }
  agendaLlena() {
    if (this.contactos.length === 10) {
      document.write(`<h2>La agenda SI está llena.</h2>`);
    } else {
      document.write(`<h2>La agenda NO está llena.</h2>`);
    }
  }
  huecosLibres() {
    let cantidad;
    if (this.contactos.length != 10) {
      cantidad = 10 - this.contactos.length;
      document.write(
        `<h2>Podemos agregar en la agenda el número de "${cantidad}" contactos más.</h2>`
      );
    }
  }
}
const agenda = [];

const agendaAlejo = new Agenda(agenda);

const contactoMirian = new Contacto("Mirian", 123);
agendaAlejo.añadirContacto(contactoMirian);

const contactoGaston = new Contacto("Gaston", 456);
agendaAlejo.añadirContacto(contactoGaston);

const contactoEmanuel = new Contacto("Emanuel", 789);
agendaAlejo.añadirContacto(contactoEmanuel);

const contactoNatu = new Contacto("Natu", 321);
agendaAlejo.añadirContacto(contactoNatu);

const contactoZulema = new Contacto("Zulema", 654);
agendaAlejo.añadirContacto(contactoZulema);

const contactoMauro = new Contacto("Mauro", 987);
agendaAlejo.añadirContacto(contactoMauro);

const contactoMary = new Contacto("Mary", 147);
agendaAlejo.añadirContacto(contactoMary);


let decision = parseInt(
  prompt(`
Ingrese una opción:
1: Añadir un contacto nuevo.
2: Eliminar un contacto random.
3: Verificar si tengo espacio en la agenda y qué tanto.
`)
);

switch (decision) {
  case 1:
    agendaAlejo.listarContacto();

    const contactoElla = new Contacto("Ella", 258);
    agendaAlejo.añadirContacto(contactoElla);

    agendaAlejo.listarContacto();
    break;

  case 2:
    agendaAlejo.listarContacto();
    agendaAlejo.existeContacto(contactoMirian);

    agendaAlejo.buscarContacto("Mirian");

    agendaAlejo.eliminarContacto(contactoMirian);

    agendaAlejo.listarContacto();

    break;

  case 3:
    agendaAlejo.listarContacto();
    
    agendaAlejo.agendaLlena();
    
    agendaAlejo.huecosLibres();
    break;

  default:
    alert(
      "La opción ingresada no se encuentra en el menú, por favor reingrese una opción que si se encuentre en el menú. Gracias."
    );
}
