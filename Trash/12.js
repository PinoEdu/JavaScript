/* Plantillas Literales o plantillas de Cadenas.

Caracteristicas:
- Se usa el acento invertido (backtick) ` en lugar de comillas.
- Pueden contener comillas simples y dobles.
-Las lineas se preservan como se escriben en el código.
- Para reemplazar una variable se escribe ${variable}.
- Dentro de ${} tambien se puede escribir expresiones

*/

var a = 6;
console.log(`El valor de a es ${a}`);

var miArreglo = [1,2,3,4];

console.log(`Mi arreglo es ${JSON.stringify(miArreglo)}`);

var persona = {
    nombre : "Gino cass",
    edad: 10
};

const SALUDO = `Hola!, mi nombre es ${persona.nombre}`;

console.log(SALUDO);