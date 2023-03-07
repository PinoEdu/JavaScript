class Device {
    constructor(sistema_operativo){
        this.sistema_operativo = sistema_operativo;
    }
}

class Libro {
    constructor(autor){
        //No se debería modificar este valor (Privada)
        this._autor = autor;
    }
    get autor(){
        return this._autor;
    }
    set autor(nuevoAutor){
        this._autor = nuevoAutor;
    }
}
var android = new Device("Android");

console.log(android.sistema_operativo);

//Getters and setters
const libro = new Libro("anonimo");

libro.autor = "Gino Smith"; //Using setters
console.log(libro.autor);   //Using getters