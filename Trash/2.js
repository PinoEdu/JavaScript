//Arrays
var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["Juanita", "Manuel", "Pedro", "Saul"];
console.log(estudiantes);

//Add "Eduardo" to array
estudiantes.push("Eduardo");
console.log(estudiantes);

//Remove the last element of array, and return that element
var retornoFinal = estudiantes.pop();
console.log(retornoFinal);

//Remove the first elemento of array
estudiantes.shift();
console.log(estudiantes);

//Add a element to start of array
estudiantes.unshift("Pepito");
console.log(estudiantes);