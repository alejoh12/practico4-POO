/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Banco {
    constructor(titularParam, saldoParam) {
        this.titular = titularParam;
        this.saldo = saldoParam;
    }

    ingresar(dinero) {
        this.saldo += dinero;
    }
    extraer(dinero) {
        this.saldo -= dinero;
    }
    informar() {
        document.write(`<h2>Estado de Cuenta</h2>`);
        document.write(`<p>Titular: "${this.titular}"</p>`);
        document.write(`<p>Saldo Actual: "${this.saldo}"</p>`);
    }
}

const cuenta = new Banco("Alex",0);

cuenta.informar();

document.write(`<br>`);

cuenta.ingresar(5000);
cuenta.informar();

document.write(`<br>`);

cuenta.extraer(500);
cuenta.informar();