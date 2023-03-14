// ***Iterables & Iterators***

const iterable = [1,2,0];

// Se accede al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();
}

// ***Generators***

function* iterable1 (){
    yield "hola 1";
    console.log("Hola consola");
    yield "hola 2";
    console.log("Seguimos con más instrucciones de nuestro código");
    yield "hola 3";
    yield "hola 4";
}

let iterador2 = iterable1();

for(let y of iterador2){
    console.log(y);
}

const arr = [...iterable1()];
console.log(arr);

function cuadrado(valor){
    setTimeout(() =>{
        console.log({valor, resultado: valor*valor});
    }, Math.random()*1000);

    return{
        valor,
        resultado: valor*valor
    }
}

function* generator(){
    console.log("Inica generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    console.log("Termina generator");
}

let gen = generator();

for(let y of gen){
    console.log(y.value);
}