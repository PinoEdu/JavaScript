// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

var contadorCaracteres = (cadena) => cadena.length;

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

var cortador = (cadena, cant) => cadena.slice(0, cant);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

var separador = (cadena) => cadena.split(" ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

var repetidor = (cadena, cant) => {
    var string = "";
    for (let i = 0; i < cant; i++) {
        string += cadena + " "
    }
    return string
}
