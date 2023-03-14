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