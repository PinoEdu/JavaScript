// ***Expresiones regulares***

let cadena = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac tristique nisi. Maecenas finibus nisl ut fermentum egestas. Cras vel urna vel est euismod tristique. Praesent blandit eros vitae quam hendrerit ultrices. Fusce in risus a neque vestibulum gravida. Ut cursus quis massa id auctor. Donec eros ex, ultricies a sapien vitae, elementum fermentum ligula. Donec at odio malesuada, sollicitudin justo sit amet, luctus orci. Sed mauris odio, suscipit in nibh suscipit, mattis hendrerit ex. Curabitur odio massa, cursus efficitur iaculis vitae, lacinia tincidunt neque. Curabitur convallis et urna eget congue.";

let expReg = new RegExp("lorem","i");
let expReg2 = /lorem/;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));
