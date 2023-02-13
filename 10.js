//Función anonima
const flecha = function() { 
    return new Date();
};

//Conversión compacta
const fecha = () => new Date();


const sumarTre = (x) => x + 3;

console.log(sumarTre(4));

const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenarArreglos([1,2],[3,4]));

const sumar = (a,b) => {
    let num = 6;
    return a + b + num;
};

console.log(sumar(5,6));

//Si val no se le asigna un valor, se le asigna 1 como defecto
const incrementar = (num,val = 1) => num + val;

console.log(incrementar(5));
console.log(incrementar(5,2));

