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

// ***Objeto: Date***

console.log(Date());

let fecha = new Date();
console.log(fecha);

console.log(fecha.getDate());
console.log(fecha.getDay());    // D L M Mi J V S -> 0 1 2 3 4 5 6
console.log(fecha.getMonth());  // Dic E F M A M Ju Jul A S O Nov -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());

// ***Objeto: Math***

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.2));
console.log(Math.round(7.5));
console.log(Math.sqrt(81));
console.log(Math.pow(2,5));
console.log(Math.random());
console.log(Math.round(Math.random() * 1000));