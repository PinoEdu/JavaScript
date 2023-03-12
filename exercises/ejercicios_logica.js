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

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primo = (numero) => {
    for(let i = 2; i < numero; i++){
        if (numero%i == 0){
            return false
        }
    }
    return true
}

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parImpar = (numero) => (numero%2 == 0) ? "Par" : "Impar";

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversorGrados = (valor, grados) => (grados == "C") ? (valor*1.8 + 32) + "°F" : ((valor - 32)/1.8) + "°C";

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const conversorBinario = (numero, base) =>{
    if (base == 2){
        numero = numero.toString().split("");
        aux = 0;
        for(let i = numero.length - 1, j = 0; i > 0; i--, j++){
            if (numero[j] == 1){
                aux += 2**i
            }
        }
        return aux + " en base 10";
    } else {
        aux = []
        while (numero > 0){
            if (numero%2 == 0){
                aux.push("0");
                numero = numero/2
            } else {
                aux.push("1");
                numero--;
                numero = numero/2
            }
        }
        aux = aux.reverse().join("");
        return aux + " en base 2";
    }
}

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const descuentos = (monto, porcentaje) => monto - monto*porcentaje/100;

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const contadorDeAños = (fecha) => {
    const fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fecha.getFullYear();

    if (fecha.getMonth() > fechaActual.getMonth()){
        edad--;
    } else if (fecha.getMonth() == fechaActual.getMonth()){
        if  (fecha.getDay() > fechaActual.getDay()){
            edad--;
        } else{
            return edad + " años";
        }
    }
    return edad + " años";
}

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contadorConstonantes = (palabra) => {
    palabra = palabra.toLowerCase().split("");
    vocales = ['a', 'e', 'i', 'o', 'u']
    var cont_vocales = 0;
    var cont_consonates = 0;
    for(let i = 0; i < palabra.length; i++){
        var flag = true;
        for(let j = 0; j < vocales.length; j++){
            if (palabra[i] == vocales[j]){
                cont_vocales++;
                flag = false;
                break;
            } else if (palabra[i] == ' '){
                flag = false;
                break
            }
        }
        if (flag) {
            cont_consonates++;
        }
    }
    return "Vocales: " + cont_vocales + ", Consonantes: " + cont_consonates;
}

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validadorNombre = (nombre) => {
    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ\s]+$/g.test(nombre);
    return (expReg) ? "El nombre ingresado es valido" : "El nombre ingresado no es valido";
}

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validadorEmail = (email) =>{
    let expReg = /^[A-Za-z0-9._]+@[A-Za-z]+.+[A-Za-z]+$/g.test(email)

    return (expReg) ? "El correo ingresado es valido" : "El correo ingresado no es valido";
}

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevados = (arreglo) => {
    for(let i = 0; i < arreglo.length; i++){
        arreglo[i] = arreglo[i]**2
    }
    return arreglo
}

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const maxMin = (arreglo) => [Math.max(...arreglo), Math.min(...arreglo)];

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
// pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const separadorArreglos = (arreglo) => {
    var pares = [], impares = [];
    for(let i = 0; i < arreglo.length; i++){
        (arreglo[i]%2 == 0) ? pares.push(arreglo[i]) : impares.push(arreglo[i]);
    }
    return {'pares' : pares, 'impares' : impares}
}

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y
// el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


const bubbleSort = (arreglo) => {
    for(let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < arreglo.length - i; j++){
            if(arreglo[j] > arreglo[j+1]){
                var aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }
    }
    var aux = []
    for(let i = arreglo.length-1; i >= 0; i--){
        aux.push(arreglo[i]);
    }
    return {'asc' : arreglo, 'desc' : aux}
}

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (arreglo) => {
    for(let i = 0; i < arreglo.length; i++){
        for(let j = i+1; j < arreglo.length; j++){
            if (arreglo[i] === arreglo[j]){
                delete(arreglo[j]);
            }
        }
    }
    return arreglo.filter(valor => valor != undefined);
}

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arreglo) => arreglo.reduce((a, b) => a + b, 0)/arreglo.length;

