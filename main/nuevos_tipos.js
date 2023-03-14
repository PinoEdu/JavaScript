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

// ***WeaksSets & WeakMaps***

const ws = new WeakSet();

let valor1 = {"valor1" : 1};
let valor2 = {"valor2" : 2};
let valor3 = {"valor3" : 3};

ws.add(valor1); // Solo acepta objetos
ws.add(valor2);
ws.add(valor3);

console.log(ws);
console.log(ws.has(valor1));

/* setInterval(() => console.log(ws),1000);

setTimeout(() =>{
    valor1 = null;
    valor2 = null;
    valor3 = null;
},5000); */

const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

console.log(wm);
console.log(wm.has(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));
