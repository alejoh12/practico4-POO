/*
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender();           auto encendido
objeto.apadar();             El auto se apagó
*/

let auto = {
    color: "blanco",
    marca: "Audi",
    modelo: "Q5",
    prendido: false,
    encender: function() {
        this.prendido=true;
        document.write(`<p>auto encendido</p>`);
    },
    apagar: function() {
        this.prendido=false;
        document.write(`<p>El auto se apagó</p>`);
    }
};

document.write(`<h2>Auto:</h2>`);
document.write(`<ul>`);
document.write(`<li>Color: <b>${auto.color}</b></li>`);
document.write(`<li>Marca: <b>${auto.marca}</b></li>`);
document.write(`<li>Modelo: <b>${auto.modelo}</b></li>`);
document.write(`<li>Está encendido?: <b>${auto.prendido}</b></li>`);
auto.encender();
document.write(`<li>Está encendido?: <b>${auto.prendido}</b></li>`);
auto.apagar();
document.write(`<li>Está encendido?: <b>${auto.prendido}</b></li>`);
document.write(`</ul>`);
