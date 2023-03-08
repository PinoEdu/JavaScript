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