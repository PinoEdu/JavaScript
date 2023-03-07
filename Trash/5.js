function clasificador(valor){
    var respuesta;
    switch (valor){
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        default:
            respuesta = "epsilon";
            break;
    }
    return respuesta;
}

console.log(clasificador());

function clasificadorIdiomas(val){
    var idioma;
    switch (val){
        case 1:
            idioma = "espaniol";
            break;
        case 2:
        case 3:
            idioma = "ingles";
            break;
        case 4:
            idioma = "frances";
            break;
        default:
            idioma = "japones";
            break;
    }
    return idioma
}

console.log(clasificadorIdiomas(6))

function raizCuadrada(number){
    if (number < 0){
        return undefined;
    } else{
        return Math.sqrt(number);
    }
}

console.log(raizCuadrada(36))