// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.

class Animal {
    constructor(nombreParam, edadParam) {
        this.nombre = nombreParam;
        this.edad = edadParam;
    }
    emitirSonido() {}
}
class Perro extends Animal {
    constructor(nombreParam, edadParam) {
        super(nombreParam, edadParam);
    }
    emitirSonido() {
        document.write(`<h2>Guau Guau Guau</h2>`);
    }
}
class Gato extends Animal {
    constructor(nombreParam, edadParam) {
        super(nombreParam, edadParam);
    }
    emitirSonido() {
        document.write(`<h2>Miaaaaau Miaaaau Miaaau (oootro gaaato -Chavo)</h2>`);
    }
}

const firulais = new Perro("Firulais",3);
document.write(`
<h2>Perro:</h2>
<ul>
<li>Nombre: ${firulais.nombre}</li>
<li>Edad: ${firulais.edad}</li>
<li>Sonido: </li>
</ul>
`);
firulais.emitirSonido()

const karen = new Gato("Karen",9);
document.write(`
<h2>Gato:</h2>
<ul>
<li>Nombre: ${karen.nombre}</li>
<li>Edad: ${karen.edad}</li>
<li>Sonido: </li>
</ul>
`);
karen.emitirSonido()