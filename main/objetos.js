// ***Objeto: console***

console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");
console.clear();    // Limpia la consola

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);
console.clear();

console.group("Cursos vistos en Youtube");
console.log("Javascript");
console.log("Node.js");
console.groupEnd();
console.clear();

console.log(console);
console.table(Object.entries(console).sort());

console.time("Cuanto tiempo tarda mi código");
const arreglo = Array(1000000);

for (let index = 0; index < arreglo.length; index++) {
    arreglo[index] = index;
}

console.timeEnd("Cuanto tiempo tarda mi código");