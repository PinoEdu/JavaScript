// ***Prototipos***

function Animal(nombre, genero){
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}

// Metodos agregados al prototipo de la funcion constructora (para que sea mas eficiente)
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

const snoopy = new Animal("snoopy", "Macho");
const bugsBunny = new Animal("Bugs Bunny", "Macho");

snoopy.sonar();
snoopy.saludar();

bugsBunny.sonar();
bugsBunny.saludar();

// ***Herencia prototipo***
function Perro(nombre,genero,tamanio){
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

// Perro está heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro");
}

Perro.prototype.ladrar = function(){
    console.log("Guau Guau");
}