//Objects
var perro = {
            'nombre' : "Gino",
            'edad' : 15,
            'peso' : 6.5,
            'raza' :  'delacalle',
            'pais de origen' : 'unknown'
            };

console.log(perro.nombre);

//access properties with spaces
console.log(perro['pais de origen']);

var curso = {
            'titulo' : 'Redes de computadores',
            'idioma' : 'espaniol',
            'duracion' : '500 horas'
            };

//Add properties
curso.inscritos = 50;
curso['cantidad de profesores'] = 1
console.log(curso.inscritos)
console.log(curso['cantidad de profesores'])

//Delete properties
delete curso['cantidad de profesores']

console.log(curso)

//Consult if a object have a properties
console.log(curso.hasOwnProperty('titulo'))
console.log(curso.hasOwnProperty('cantidad de profesores'))
