# 📘 Valores por defecto y Renombrado en JavaScript

Este documento explica de forma clara y práctica qué son los **valores por defecto** y el **renombrado** en JavaScript, cuándo se usan, errores comunes y si realmente son características muy utilizadas o solo para casos puntuales.

---

## 🧠 Contexto

Estas características forman parte del **JavaScript moderno (ES6+)** y se usan principalmente junto con la **desestructuración**, una forma de extraer datos de objetos y arreglos de manera más directa y legible.

Su objetivo principal es:

* Evitar errores como `undefined`
* Reducir código repetido
* Mejorar la legibilidad y el mantenimiento

---

## 1️⃣ Valores por defecto

### ¿Qué son?

Los valores por defecto permiten asignar un valor automáticamente cuando una variable o parámetro **no recibe un valor (`undefined`)**.

### Ejemplo básico

```js
function saludar(nombre = "Invitado") {
  console.log(nombre);
}

saludar();        // Invitado
saludar("Ana");   // Ana
```

Esto evita tener que usar condicionales como:

```js
if (!nombre) nombre = "Invitado";
```

---

### Uso con objetos (muy común)

```js
const usuario = { nombre: "Carlos" };

const { nombre, edad = 18 } = usuario;
```

Si `edad` no existe, se asigna automáticamente el valor `18`.

---

### Uso con arreglos

```js
const numeros = [5];

const [a = 1, b = 2] = numeros;
```

---

### ¿Cuándo se usan valores por defecto?

* Parámetros opcionales
* Configuraciones
* Datos incompletos de APIs
* Formularios

---

## 2️⃣ Renombrado (alias)

### ¿Qué es?

El renombrado permite cambiar el nombre de una propiedad al desestructurarla, para hacer el código más claro o evitar conflictos.

### Ejemplo

```js
const persona = { nombre: "Laura" };

const { nombre: nombreUsuario } = persona;
```

Después del renombrado, **solo existe `nombreUsuario`**, no `nombre`.

---

### ¿Cuándo se usa el renombrado?

* Evitar nombres duplicados
* Adaptar nombres del backend
* Cambiar `snake_case` a `camelCase`
* Mejorar legibilidad

Ejemplo típico de API:

```js
const apiData = {
  user_name: "Pedro",
  user_age: 20
};

const {
  user_name: nombre,
  user_age: edad
} = apiData;
```

---

## 3️⃣ Valores por defecto + Renombrado juntos

En proyectos reales es muy común usar ambos al mismo tiempo.

```js
const apiUser = {
  usr_name: "Sergio"
};

const {
  usr_name: nombre,
  rol = "usuario"
} = apiUser;
```

Esto permite:

* Usar nombres claros
* Evitar errores si faltan datos

---

## 4️⃣ Uso en funciones (patrón profesional)

```js
function initApp({
  debug = false,
  lang = "es",
  theme = "light"
} = {}) {
  console.log(debug, lang, theme);
}
```

Este patrón es estándar en:

* Node.js
* React
* Librerías JavaScript

---

## 5️⃣ Errores comunes

### ❌ Error 1: Pensar que el valor por defecto cubre `null`

```js
function test(x = 10) {
  console.log(x);
}

test(null); // null
```

✔ Los valores por defecto solo se aplican cuando el valor es `undefined`.

---

### ❌ Error 2: Desestructurar algo que puede ser `undefined`

```js
function mostrar({ nombre }) {}
mostrar(); // Error
```

✅ Solución:

```js
function mostrar({ nombre } = {}) {}
```

---

### ❌ Error 3: Usar el nombre original después de renombrar

```js
const { nombre: n } = user;
console.log(nombre); // Error
```

---

### ❌ Error 4: Confundir `||` con valores por defecto

```js
let x = 0;
console.log(x || 10); // 10 ❌
console.log(x ?? 10); // 0 ✅
```

Por eso se recomienda usar `??` cuando se manejan valores por defecto.

---

## 6️⃣ ¿Se usan mucho o solo en casos puntuales?

✔ **Valores por defecto** → Muy usados
✔ **Renombrado** → Uso situacional

### Muy comunes en:

* Funciones con muchos parámetros
* APIs
* React / Node.js
* Configuraciones

### Poco usados en:

* Código simple
* Variables triviales

No se usan por moda, sino cuando aportan claridad y seguridad.

---

## 🧾 Conclusión

Los valores por defecto y el renombrado son herramientas clave del JavaScript moderno.

* Reducen errores
* Mejoran la legibilidad
* Facilitan el mantenimiento del código

Usarlos correctamente es una señal de buen criterio como desarrollador.

---

## 🎯 Regla mental final

> Si un dato puede no venir, usa un valor por defecto.
>
> Si el nombre no es claro o genera conflictos, renómbralo.
