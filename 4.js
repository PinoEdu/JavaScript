//Queues
function proximoEnLaFila(arr, elem){
    arr.push(elem); //Add a element to end of array
    return arr.shift();    //Remove the first element of array
}

var arreglo = [1,2,3,4,5];
console.log("Antes: "+JSON.stringify(arreglo));

console.log(proximoEnLaFila(arreglo,6));

console.log(JSON.stringify(arreglo));

console.log(9 == "9");
console.log(9 === "9");

console.log(1 != "1");
console.log(1 !== "1");