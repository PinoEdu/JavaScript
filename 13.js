const crearPersona = (nombre, edad,idioma) => {
    return{
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(crearPersona("Eduardo",23,"Español"));

//Version comprimida
const crearDispositivo = (ip, region) => ({ip,region});

console.log(crearDispositivo("10.0.0.1","Chile"));

const persona = {
    nombre : "Isabel",
    presentarse(){
        return `Hola!, mi nombre es ${this.nombre}.`;
    }
};

console.log(persona.presentarse());