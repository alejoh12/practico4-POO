// Objeto "Cuenta Bancaria": Crea un objeto llamado cuentaBancaria con propiedades como saldo y titular, y métodos como depositar y retirar que actualicen el saldo.

let cuentaBancaria = {
    saldo: 5000000,
    titular: "Facundo Herrera",
    depositar: function(deposito) {
        this.saldo += deposito;
    },
    retirar: function(retiro) {
        this.saldo -= retiro;
    }
};

document.write(`<h1>Titular: ${cuentaBancaria.titular}</h1>`);
document.write(`<h2>Saldo Original: ${cuentaBancaria.saldo}</h2>`);
cuentaBancaria.depositar(5000);
document.write(`<h2>Saldo con Depósito de 5000: ${cuentaBancaria.saldo}</h2>`);
cuentaBancaria.retirar(1000);
document.write(`<h2>Saldo con Retiro de 1000: ${cuentaBancaria.saldo}</h2>`);
