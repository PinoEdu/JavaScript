// **Var vs Let**

// Ambito global
var hola = "Hola Mundo";

// Ambito de bloque
let hello = "Hola mundo";

// Ambito de bloque -> { ... }

// **Constantes**
const PI = 3.1416;
const e = 2.7182;

// **Objetos y arreglos**
let objeto = {
    nombre : 'John',
    edad : 35
};

let colors = ["Blanco", "Negro", "Azul"];

// Crear una nueva propiedad del objeto
objeto.correo = "john@gmail.com";

// Agregar un nuevo color al arreglo
colors.push("Rojo");

// Ahora vamos a crear el mismo objeto y mismo arreglo pero usando const
const objeto_aux  = {
    nombre : 'John',
    edad : 35
};

const colors_aux = ["Blanco", "Negro", "Azul"];

// Como los objetos y los arreglos son de tipo compuesto, podremos modificarlos siendo const
objeto_aux.correo = "john@gmail.com";
colors_aux.push("Rojo");

