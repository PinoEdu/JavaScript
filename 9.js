for(var i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);

for(let x = 0; x < 5; x++){
    console.log(x);
}

//console.log(x); //Error: Not defined

const MI_ARREGLO = [1,2,3,4,5];

MI_ARREGLO[0] = 9;
MI_ARREGLO[4] = 1;
console.log(MI_ARREGLO);

let colores = {
    'verde' : '#00FF00',
    'rojo' : '#FF0000',
    'azul' : '#0000FF'
};

//Congelar el cambio de propiedades de colores
Object.freeze(colores);


