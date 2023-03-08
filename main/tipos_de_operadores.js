// ***Operadores***

// Aritmeticos
let a = 5 + 5;
let b = 5 * 5;
let c = 5 / 5;
let d = 5 % 2;

// Relacionales
console.log(8 > 9);
console.log(8 < 9);
console.log(8 >= 9);
console.log(8 == 9);
console.log(8 != 9);
console.log("9" === 9); // Compara los valores y tipos de datos
console.log("9" !== 9); //Compara los valores y sus tipos

// Operadores de incremento o decremento
let i = 1;
i += 1;
i *= 3;

// Operadores unarios
i++;
i--;

// ***Condicionales***
let edad = 23;

if (edad >= 18){
    console.log("Eres mayor de edad");
} else{
    console.log("Eres menor de edad");
}

let hora = 5;
if (0 < hora < 6){
    console.log("Dejaem dormir");
} else if (5 < hora < 12){
    console.log("Buenos días");
} else if (11 < hora < 19) {
    console.log("Buenas tardes");
} else{
    console.log("Buenas noches");
}

// Operadores ternarios
let eresMayor = (edad >= 18) ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");

// Switch
let dia = 2;

switch(dia){
    case 0:
        console.log("Domingo");
        break
    case 2:
        console.log("Lunes");
        break
    case 2:
        console.log("Martes");
        break
    case 3:
        console.log("Miercoles");
        break
    case 4:
        console.log("Jueves");
        break
    case 5:
        console.log("Viernes");
        break
    case 6:
        console.log("Sabado");
        break
    default:
        break;
}
