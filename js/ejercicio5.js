/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombreParam, edadParam, dniParam, sexoParam, pesoParam, alturaParam, nacimientoParam) {
        this.nombre = nombreParam;
        this.edad = edadParam;
        this.dni = dniParam;
        this.sexo = sexoParam;
        this.peso = pesoParam;
        this.altura = alturaParam;
        this.nacimiento = nacimientoParam;
    }

    mostrarDatos() {
        document.write(`
        <h2>Persona:</h2>
        <ul>
        <li>Nombre: "${this.nombre}"</li>
        <li>Edad: "${this.edad}"</li>
        <li>DNI: "${this.dni}"</li>
        <li>Sexo: "${this.sexo}"</li>
        <li>Peso: "${this.peso}"</li>
        <li>Altura: "${this.altura}"</li>
        <li>Año de Nacimiento: "${this.nacimiento}"</li>
        </ul>
        <br>
        `);
    }
    mostrarGeneracion() {
        let generacion = "";
        let caracteristica = "";
        if(this.nacimiento < 2011 && this.nacimiento > 1993) {
            generacion = "Generación Z";
            caracteristica = "Irreverencia";
        }else if(this.nacimiento < 1994 && this.nacimiento > 1980) {
            generacion = "Generación Y - Millenials";
            caracteristica = "Frustración";
        }else if(this.nacimiento < 1981 && this.nacimiento > 1968) {
            generacion = "Generación X";
            caracteristica = "Obsesión por el éxito";
        }else if(this.nacimiento < 1969 && this.nacimiento > 1948) {
            generacion = "Baby boom";
            caracteristica = "Ambición";
        }else if(this.nacimiento < 1949 && this.nacimiento > 1929) {
            generacion = "Silent Generation - Los niños de la posguerra";
            caracteristica = "Austeridad";
        }
        document.write(`
        <h2>Generación de la persona:</h2>
        <p>La persona pertenece a la generación: "${generacion}".</p>
        <p>El rasgo caracteristico de ésta generación es: "${caracteristica}".</p>
        `);
    }
    esMayorDeEdad() {
        if(this.edad > 17) {
            document.write(`<p>La persona SI es mayor de edad.</p>`);
        }else {
            document.write(`<p>La persona NO es mayor de edad.</p>`);
        }
    }
    generaDNI() {
        const numero = Math.round(Math.random()*(100000000));
        document.write(`<p>El DNI de la persona es: ${numero}.</p>`);
    }
}

const facundo = new Persona("Facundo", 22, 43291627, "M", 70, 1.71,2001);

facundo.mostrarDatos();

facundo.mostrarGeneracion();

facundo.esMayorDeEdad();

facundo.generaDNI();