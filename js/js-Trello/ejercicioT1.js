// Gestión de inventario en una tienda: Tienes dos arrays, uno que representa los productos en stock y otro que almacena los precios de los productos. Debes crear funciones que permitan agregar nuevos productos al inventario, eliminar productos agotados y calcular el valor total del inventario.
const productosEnStock = ["Fideos", "Arroz", "Azucar", "Aceite"];
const preciosProductos = [500, 600, 1000, 1500];

function agregarProducto(producto, precio) {
  productosEnStock.push(producto);
  preciosProductos.push(precio);
}

function eliminarProducto(producto) {
  for (let i = 0; i < productosEnStock.length; i++) {
    if (productosEnStock[i] === producto) {
      productosEnStock.splice(i, 1);
      preciosProductos.splice(i, 1);
    }
  }
}

function calcularInventario() {
  let total = 0;
  preciosProductos.map((precio) => (total += precio));
  return total;
}

function mostrarProductos(cadena) {
    if(cadena === undefined) {
        document.write(`<h2>Lista de Productos:</h2>`);
    }else {
        document.write(`<h2>Lista de Productos (${cadena}):</h2>`);
    }
  document.write(`<ul>`);
  for (let i = 0; i < productosEnStock.length; i++) {
    document.write(
      `<li>Producto: <b>'${productosEnStock[i]}'</b> y Precio: $<b>${preciosProductos[i]}</b></li>`
    );
  }
  document.write(`</ul>`);
}

mostrarProductos();

mostrarProductos("original");

agregarProducto("Mayonesa",700);

mostrarProductos("con producto agregado mayonesa");

eliminarProducto("Azucar");

mostrarProductos("sin el producto azucar");