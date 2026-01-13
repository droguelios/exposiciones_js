const persona = {
  nombre: "Ana",
  direccion: {
    ciudad: "Bogotá",
    barrio: "Chapinero"
  }
};

const {nombre, direccion: { ciudad }} = persona;

console.log(nombre, ciudad); // Ana Bogotá
