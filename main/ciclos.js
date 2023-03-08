// ***Ciclos***
let contador = 0;

// Ciclo while
while (contador < 10){
    console.log("do",contador);
    contador++;
}

// Ciclo while-do
do {
    console.log("while",contador);
    contador++;
} while (contador < 10);

// Ciclo for
for(let i=0; i < 10; i++){
    console.log("for",i);
}   

// ***Break & Continue***
const numeros = [0,1,2,3,4,5,6,7,8,9];

for (let index = 0; index < numeros.length; index++) {
    if (index === 5){
        break;          // Se va romper el ciclo cuando el index sea 5 
    }
    console.log(numeros[index]);
}

for (let index = 0; index < numeros.length; index++) {
    if (index === 5){
        continue;       // Se va saltar la iteracion cuando index sea 5
    }
    console.log(numeros[index]);
}