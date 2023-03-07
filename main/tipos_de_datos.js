// ***Var vs Let***

// Ambito global
var hola = "Hola Mundo";

// Ambito de bloque
let hello = "Hola mundo";

// Ambito de bloque -> { ... }

// ***Constantes***
const PI = 3.1416;
const e = 2.7182;

// ***Objetos y arreglos***
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

// ***Cadena de texto Strings***
let nombre = "John";
let apellido = "Perez";
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et consectetur tellus. In commodo, quam at mollis pharetra, mi purus commodo velit, eget euismod odio neque a felis. Quisque scelerisque at metus sed ultrices. Nulla laoreet porta nunc, a semper augue ultrices id. Duis sem urna, suscipit nec fermentum ac, fringilla in risus. Morbi a eleifend odio. Donec rutrum justo orci, ut blandit sapien aliquet vitae. Praesent non dui diam."

// Propiedades de string y metodos
nombre.length
nombre.toUpperCase()
nombre.toLowerCase()
lorem.includes("Lorem")
lorem.trim() //Quita los espacios al inicio y al final de cada string
lorem.split(".")

// ***Metodos de strings***

// Concatenacion
let saludar = "Hola " + nombre + apellido ;

// Interpolacion de variables
let saludar2 = `Hola ${nombre} ${apellido}`;

let ul = `
    <ul>
        <li> Hola </li>
        <li> Como </li>
        <li> Estas </li>
    </ul>
`;

