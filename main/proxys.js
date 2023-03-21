const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set(obj, prop, valor){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
        }
        if ((prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(valor))){
            return console.error(`La propiedad "${prop}" solo acepta letras y espacios en blanco`);
        }
        obj[prop] = valor;
    }
}

const eduardo = new Proxy(persona, manejador);

eduardo.nombre = "Eduardo";
eduardo.apellido = "Pino";
eduardo.edad = 23;
eduardo.nacimiento = 1999;

console.log(eduardo);
