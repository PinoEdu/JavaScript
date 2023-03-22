// ***Var vs Let***

const { json } = require("stream/consumers");

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

// ***Numeros***
let a = 2;
let b = new Number(1);
let c = 7.19;

c.toFixed(5); // Metodo para mostrar una cierta cantidad de decimales
parseInt(c); // Metodo para mostrar la parte entera del numero
parseFloat(c); // Metodo que muestra el numero decimal completo

// ***Booleanos***
let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

// ***Undefined, null & NaN***
let indefinida;
let nulo = null;

// NaN: Not a Number
let noEsUnNumero = "hola" * 3.7;

// ***Arreglos***
const arreglo = [];
const elementos = [1, true, "Hola",[2, false, []],1.2];
const arreglo2 = Array.of("X", "Y", "Z");
const colores = ["Rojo", "Verde", "Azul"];

// Metodos de un arreglo
elementos.length;
elementos[3];
elementos.push(5);  // Agrega un elemento al final del arreglo
elementos.pop();    // Quita el primer elemento del arreglo y lo retorna

colores.forEach(function (el, index){
    console.log(`<li id="${index}"> ${el} </li>`);
});

// ***Objetos***

const Eduardo = {
    nombre : 'Eduardo',
    apellido : 'Pino', 
    edad: 23,
    saludar : function(){
        console.log("Hola :)");
    },
    decirMiNombre : function(){
        console.log(`Hola, mi nombre es ${this.nombre}`);   // Para hacer referencia al mismo objecto en que se encuentra
    }
}

// Propiedades
Eduardo['nombre']
Eduardo['apellido']
Eduardo['edad']
Eduardo.nombre
Eduardo.apellido
Eduardo.edad

// Metodos
Eduardo.saludar

// ***Destructuracion***
const numeros = [0,1,2,3,4,5];

// Sin destructuracion
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

// Con destructuracion
const [one,two,three] = numeros;

// ***this***

this.nombree = "Contexto Global";

function imprimir(){
    console.log(this.nombre);
}
const obj = {
    nombre : "Contexto objeto",
    imprimir : function(){
        console.log(this.nombre);
    }
}

obj.imprimir();

const obj2 = {
    nombre : "Contexto objeto 2",
    imprimir
}

obj2.imprimir();

const obj3 = {
    nombre : "Contexto objeto 3",
    imprimir : () => {
        console.log(this.nombre);
    }
}

obj3.imprimir();

function Persona(nombre){
    this.nombre = nombre;
    //return console.log(this.nombre);
    return function(){
        console.log(this.nombre);
    }
}

let edu = new Persona("Edu");
edu();

// ***call, apply, bind***

console.log(this);

this.lugar = "Contexto global";

function saludarrr(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludarrr("Hola", "perro");

const obj4 = {
    lugar: "Contexto objeto"
}

saludarrr.call(obj4, "Hola", "Eduardo");
saludarrr.apply(obj4, ["Adios", "Eduardo"]);

const person = {
    nombre: "Eduardo",
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

person.saludar();

const otraPersona = {
    saludar: person.saludar.bind(person)
}

otraPersona.saludar();

// ***Json***

const json2 = {
    cadena: "Eduardo",
    numero: 35,
    bool: true,
    arreglo: ["correr", "programar", "debug"],
    obj: {github: "github.com", correo: "correo@correo.cl"},
    nulo: null
}

console.log(JSON.parse("{}"));  // Convierte de cadena de texto a objeto valido por js

console.log(JSON.stringify(json2));
console.log(typeof(JSON.stringify(json2)));

