function mostrarUsuario({ nombre, edad }) {
  console.log(nombre);
  console.log(edad);
}

const user = {
  nombre: "Luis",
  edad: 22,
  pais: "México"
};

mostrarUsuario(user);
