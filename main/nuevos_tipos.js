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


// ***Maps***

let mapa = new Map();

mapa.set("nombre","Eduardo");
mapa.set("apellido", "Pino");
mapa.set("edad", 23);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.get("nombre"));

mapa.set("nombre", "Edu");
console.log(mapa);
mapa.delete("apellido");

for(let [key,value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}

mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({},{});

console.log(mapa);

const mapa2 = new Map([
    ["nombre", "Mauricio"],
    ["edad", 23],
    ["animal", "gato"],
    [null, "nullo"]
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);