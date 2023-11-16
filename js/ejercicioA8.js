// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse"

class Persona {
    constructor(nombreParam, edadParam, profesionParam) {
        this.nombre = nombreParam;
        this.edad = edadParam;
        this.profesion = profesionParam;
    }

    saludar() {
        document.write(`<h2>Hola, mi nombre es ${this.nombre} y me dedico a ser ${this.profesion}. Un gusto saludarte. :)</h2>`);
    }
    despedirse() {
        document.write(`<h2>Adios, nos vemos luego. Tengo mucho trabajo siendo ${this.profesion} :)</h2>`);
    }
}

const alejo = new Persona("Alejo",22,"estudiante");

alejo.saludar();

alejo.despedirse();