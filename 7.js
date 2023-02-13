function generarFraccionAleatoria(){
    return Math.random(); //(0,1) no incluyendo 0 ni 1
}

console.log(generarFraccionAleatoria());

var numberAleatorioInteger = Math.floor(Math.random() * 10); //[0,9]
console.log(numberAleatorioInteger);

for(var i = 0; i < 5; i++){
    console.log(numberAleatorioInteger);
    numberAleatorioInteger = Math.floor(Math.random() * 10);
}

function rangoAleatorioConLimites(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

for(var i = 0; i < 5; i++){
    console.log(rangoAleatorioConLimites(5,8));
}

console.log(parseInt("551"));
console.log(parseInt("-17"));

console.log(parseInt("8.3"));
console.log(parseInt("adasd"));


