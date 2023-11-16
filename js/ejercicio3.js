// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(altoParam, anchoParam) {
        this.alto = altoParam;
        this.ancho = anchoParam;
    }

    modificar(altoNuevo, anchoNuevo) {
        if(!isNaN(altoNuevo)) this.alto = altoNuevo;
        if(!isNaN(anchoNuevo)) this.ancho = anchoNuevo;
        console.log("Los valores del rectangulo han sido modificados.");
    }
    mostrar() {
        document.write(`
        <h2>Rectangulo</h2>
        <p>Alto: ${this.alto}</p>
        <p>Ancho: ${this.ancho}</p>
        `);
    }
    calcularPerimetro() {
        const calculo = 2*this.alto + 2*this.ancho;
        document.write(`<p>El perímetro del triangulo es: "${calculo}"</p>`);
    }
    calcularArea() {
        const calculo = this.alto * this.ancho;
        document.write(`<p>El area del triangulo es: "${calculo}"</p>`);
    }
}

const chiquito = new Rectangulo(4,2);

chiquito.mostrar();
chiquito.calcularPerimetro();
chiquito.calcularArea();
document.write(`<br>`);

chiquito.modificar(1,2);
chiquito.mostrar();
chiquito.calcularPerimetro();
chiquito.calcularArea();
document.write(`<br>`);

chiquito.modificar(2,4);
chiquito.mostrar();
chiquito.calcularPerimetro();
chiquito.calcularArea();