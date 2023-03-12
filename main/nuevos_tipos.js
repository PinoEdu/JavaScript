// ***Symbols***

let id = Symbol("id");
let id2 = Symbol("id2");

const NOMBRE = Symbol();
const SALUDAR = Symbol();

const persona = {
    [NOMBRE] : "Eduardo"
};

persona.NOMBRE = "Eduardo Pino";

persona[SALUDAR] = function (){
    console.log("Hola");
};

persona[SALUDAR]();

// ***Set***

const set = new Set([1, 2, 3, 3, 5, true, false, false, {}, "hola", "HOLA"]);

set.delete("HOLA");

console.log(set.size) // Saber el largo del set

const set2 = new Set();

set2.add(1);
set2.add(2);
set2.add(2);
set2.add(true);
set2.add(true);

console.log();
for (item of set2){
    console.log(item);
}

let arr = Array.from(set2);

set2.clear();   // Limpiar el set completo