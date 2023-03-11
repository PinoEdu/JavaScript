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

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
var invertir = (cadena) => cadena.split("").reverse().join("");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

var contadorPalabrasRepetidas = (cadena, palabra) => {
    const aux = cadena.split(" ");
    var contador = 0;
    for (let i = 0; i < aux.length; i++) {
        if (aux[i] === palabra){
            contador++;
        }
    }
    return contador;
}

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

var palindromo = (cadena) => {
    const cadena1 = cadena.toLowerCase();
    const cadena2 = cadena1.split("").reverse().join("");
    return (cadena1 === cadena2) ? true : false;
}
