// ***Temporizadores (setTimeOut & setInterval)***

let temporizadorTimeOut = setTimeout(() => {
    console.log("Ejecutando un setTimeOut, esto se ejecuta una sola vez");
}, 3000);

clearTimeout(temporizadorTimeOut);

let temporizadorInterval = setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo");
}, 3000);

clearInterval(temporizadorInterval);


function cuadradoPromise(value){
    if (!typeof value != "number"){
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);
    }
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                value,
                result: value*value
            });
        }, 0 | Math.random()*1000);
    });
}

async function funcionAsincronaDeclara(){
    try{
        console.log("Inicio AsyncFunction");

        let obj = cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
    } catch (err){
        console.log(err);
    }
}