// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contadorCaracteres = (cadena) => cadena.length;

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const cortador = (cadena, cant) => cadena.slice(0, cant);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const separador = (cadena) => cadena.split(" ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetidor = (cadena, cant) => {
    var string = "";
    for (let i = 0; i < cant; i++) {
        string += cadena + " "
    }
    return string
}

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertir = (cadena) => cadena.split("").reverse().join("");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contadorPalabrasRepetidas = (cadena, palabra) => {
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

const palindromo = (cadena) => {
    const cadena1 = cadena.toLowerCase();
    const cadena2 = cadena1.split("").reverse().join("");
    return (cadena1 === cadena2) ? true : false;
}

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const patron = (cadena, patron) => {
    const patronAux = patron.split("");
    const cadenaAux = cadena.split(" ");
    var retorno = "";
    for (let i = 0; i < cadenaAux.length ; i++){
        let aux = cadenaAux[i].split("")
        for(let j = 0; j < aux.length ; j++){
            if (j != patronAux.indexOf(aux[j])){
                retorno += aux[j] + " ";
            }
        }
    }
    return retorno;
}

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomEntre = () => Math.floor(Math.random() * (600 - 501 + 1) + 501);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero) => {
    numero = numero.toString().split("");
    return (numero.join("") === numero.reverse().join("")) ? true : false;
}

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos
// desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero) => {
    for(var suma = 1;numero > 0; suma *= numero, numero--){
    }
    return suma;
}
console.log(factorial(10));

