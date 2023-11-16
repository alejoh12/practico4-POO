// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades. Posteriormente, cree tres instancias de este objeto y guárdalas en un array. Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    constructor(codigoParam, nombreParam, precioParam) {
        this.codigo = codigoParam;
        this.nombre = nombreParam;
        this.precio = precioParam;
    }

    imprimirDatos() {
        document.write(`
        <h2>Producto:</h2>
        <ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>
        `);
    }
}

const productos = [];

const azucar = new Producto(101,"Azucar",1000);
productos.push(azucar);

const cereal = new Producto(110,"Cereal",500);
productos.push(cereal);

const mermelada = new Producto(151,"Mermelada",900);
productos.push(mermelada);

for(let i=0;i<productos.length;i++) {
    productos[i].imprimirDatos();
    document.write("<br>");
}