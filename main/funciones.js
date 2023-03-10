// ***Funciones***

// Funcion declarada
function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

// Funcion declada con retorno
function estaEsOtraFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    return "Se retornará esto";
}

// Invocacion de funcion
estoEsUnaFuncion();

// Capturar el retorno de la funcion
let valorDeLaFuncion = estaEsOtraFuncion();

// Paso de parametros a la funcion
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar("Juan");

// Funcion anonima
const funcionExpresada = function(){
    console.log("Esto es una función expresada");
}

funcionExpresada();

// ***Parametros REST***
function sumar(a,b,...c){
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n;
    });
    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3,4));

// ***Arrow functions***

// Sin arrow function
const diHola = function(){
    console.log("Hola");
};

// Con arrow function (si es solo una linea, se puede omitir { })
const diHello = () => console.log("Hello");

// Sin arrow function
var sum = function(a,b){
    return a + b;
}

// Con arrow function
sum = (a,b) => a + b;

// Arrow function con varias lineas
const variosSaludos = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

// ***Funcion anonima auto-ejecutable***

(function (){
    console.log("Mi primer IIFE");
})();

(function (d, w, c){
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("Este es un console.log");

})(document, window, console);


// Clásica
(function (){
    console.log("Versión clásica");
})();

// La Crockford
((function (){
    console.log("Version Crockford");
})());

// Unaria
+function(){
    console.log("Version Unaria");
}();

// Facebook
!function (){
    console.log("Version Facebook");
}();