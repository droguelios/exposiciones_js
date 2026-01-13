/*************************************************
 * USO DE PARÁMETROS EN FUNCIONES (JS)
 * DEL PEOR AL MEJOR MÉTODO
 *************************************************/


//  1. PEOR MÉTODO
// Función sin parámetros (valores quemados)
//  No reutilizable
function calcularTotalFijo() {
  let precio = 100;
  let impuesto = 19;
  console.log("Total:", precio + impuesto);
}

calcularTotalFijo();


//  2. PARÁMETROS SIN VALIDACIÓN
//  Puede causar errores
function sumarSinValidar(a, b) {
  console.log("Resultado:", a + b);
}

sumarSinValidar(5, 3);      // OK
sumarSinValidar("5", "3");  // Error lógico


// 3. PARÁMETROS CON VALIDACIÓN
// Más seguro
function sumarValidado(a, b) {
if (typeof a !== "number" || typeof b !== "number") {
    console.log("Error: los parámetros deben ser números");
    return;
}
console.log("Resultado:", a + b);
}

sumarValidado(10, 5);
sumarValidado("10", 5);


//  4. PARÁMETROS CON VALORES POR DEFECTO
//  Evita errores si faltan datos
function saludar(nombre = "Invitado") {
  console.log("Hola", nombre);
}

saludar("Alejandro");
saludar();


//  5. OBJETO COMO PARÁMETRO
//  Escalable y profesional
function crearUsuario(usuario) {
console.log("Nombre:", usuario.nombre);
console.log("Edad:", usuario.edad);
console.log("Rol:", usuario.rol);
}

crearUsuario({
nombre: "Alejandro",
edad: 21,
rol: "Admin"
});


//  6. MEJOR MÉTODO: DESTRUCTURING EN PARÁMETROS
// Código limpio y estándar profesional
function crearUsuarioPro({ nombre, edad, rol }) {
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Rol:", rol);
}

crearUsuarioPro({
nombre: "Alejandro",
edad: 21,
rol: "Admin"
});
