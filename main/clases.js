// ***Clases***
class Animal{
    // Metodo especial para crear una clase
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    // Metodos
    saludar(){
        console.log("Holaaaa");
    }
    despedir(){
        console.log("Chao");
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Animal("Scooby", "Macho");

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        // Metodo que llama al constructor de la clase padre
        super(nombre,genero);
        this.tamanio = tamanio;
    }

    // Metodos
    saludar(){
        console.log("Guau guau");
    }
    despedir(){
        console.log("Guau");
    }
}

const scooby2 = new Perro("Scooby", "Macho", "Grande");
scooby2.saludar();