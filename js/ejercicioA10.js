/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite  que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/
class Persona {
    constructor(nombreParam) {
        this.nombre = nombreParam;
    }
}

class Avion {
    constructor(nombreParam, capacidadParam, destinoParam, listaPasajerosParam) {
        this.nombre = nombreParam;
        this.capacidad = capacidadParam;
        this.destino = destinoParam;
        this.listaPasajeros = listaPasajerosParam;
    }
    abordar(persona) {
        if(this.listaPasajeros.length < this.capacidad) {
            document.write(`<p>El pasajero ${persona.nombre} subió en el avión ${this.nombre}.</p>`);
            this.listaPasajeros.push(persona);
        }else {
            document.write(`<p>El pasajero ${persona.nombre} no pudo subir en el avión. Ya que se encuentra sin capacidad.</p>`);
        }
    }
}

class Aeropuerto {
    constructor(nombreAeropuertoParam, listaAvionesParam) {
        this.nombreAeropuerto = nombreAeropuertoParam;
        this.listaAviones = listaAvionesParam;
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion)
    }
    buscarAvion(nombre) {
        let bandera = true;
        this.listaAviones.map(avion => {
            if(avion.nombre === nombre) {
                document.write(`<p>El avión de nombre ${nombre} SI se encontró en la lista de aviones.</p>`);
                bandera=false;
            };
        });
        if(bandera) {
            document.write(`<p>El avión de nombre ${nombre} NO se encontró en la lista de aviones.</p>`);
        }
    }
}
const lista = [];

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional",lista);

const pepe = new Avion("Pepe",100,"Uruguay",lista);
const lolo = new Avion("Lolo",150,"Brasil",lista);
const jose = new Avion("Jose",200,"Mexico",lista);

aeropuertoInternacional.agregarAvion(pepe);
aeropuertoInternacional.agregarAvion(lolo);
aeropuertoInternacional.agregarAvion(jose);

aeropuertoInternacional.buscarAvion("Pepe");

const alejo = new Persona("Alejo");

pepe.abordar(alejo);