//Operador rest, donde no se define el numero de parametros a pasar
function miFuncion(...args){
    console.log(args);
}

miFuncion(1,2,3,4,5,6,7)

//Operador reduce, que suma los argumentos y retorna el resultado
const sumar = (...args) => {
    return args.reduce((a,b) => a + b,0);
};

const numeros = [1,2,3];

//Operador spread
function sumarr(x,y,z){
    return x + y + z;
}

console.log(sumarr(...numeros));

const usuario = {
    nombre: "Gino Smith",
    edad: 34
};

//Descomponer las propiedades de usuario en nuevas variables
const {nombre,edad} = usuario;

const usuario1 = {
    john:{
        edadd: 27,
        apellido: "Perez"
    }
};

const {john:{edadd,apellido}} = usuario1;

console.log(edadd);
console.log(apellido);