const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
let precioDescuento = 200
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento);
console.log (nuevoPrecio);