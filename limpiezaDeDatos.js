/**
 * SIMULACIÓN DE RESPUESTA DE API
 * Imagina que esto viene de un: fetch('https://api.tienda.com/productos/1')
 */
const apiResponse = {
  status: 200,
  data: {
    id: "PROD-99",
    attributes: {
      title: "Teclado Mecánico RGB",
      pricing: {
        amount: 85.50,
        currency: "USD"
      },
      stock: 0
    },
    relacionados: [
      { id: "PROD-100", name: "Mouse Pad" },
      { id: "PROD-101", name: "Apoyamuñecas" }
    ]
  }
};

/**
 * MÉTODO LIMPIO: DESTUCTURING AVANZADO
 */
const procesarProducto = (response) => {
  // 1. Extraemos niveles profundos en un solo paso
  // 2. Renombramos 'title' a 'nombre' para que sea más semántico
  // 3. Asignamos un valor por defecto a 'categoria' porque la API no lo envía
  // 4. Extraemos el primer elemento del array 'relacionados'
  
  const {
    data: {
      id,
      attributes: { 
        title: nombre, 
        pricing: { amount: precio },
        stock 
      },
      relacionados: [primerRelacionado] // Extrae el índice 0 del array
    },
    categoria = "General" // Valor por defecto si no existe en la respuesta
  } = response;

  // Ahora las variables están limpias y listas para usar
  console.log(`ID: ${id}`);                // "PROD-99"
  console.log(`Producto: ${nombre}`);     // "Teclado Mecánico RGB"
  console.log(`Precio: $${precio}`);      // 85.5
  console.log(`Categoría: ${categoria}`);  // "General"
  console.log(`Sugerencia: ${primerRelacionado.name}`); // "Mouse Pad"

  // Uso de lógica defensiva con el stock
  const mensajeStock = stock > 0 ? "Disponible" : "Agotado";
  console.log(`Estado: ${mensajeStock}`);
};

/**
 * COMPARATIVA: ¿POR QUÉ ES MEJOR ASÍ?
 */

// --- FORMA SUCIA (Sin Destructuring) ---
// const nombre = response.data.attributes.title; 
// const precio = response.data.attributes.pricing.amount;
// Riesgo: Si 'attributes' es null por error de API, el código rompe con "Cannot read property 'title' of null".

// --- FORMA LIMPIA (Con Destructuring) ---
// Es más declarativa. Al principio del bloque ya sabes exactamente 
// qué campos del objeto se van a utilizar en toda la función.

procesarProducto(apiResponse);