// ***Introducción: DOM***

console.log("****Elementos del documento****");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);


// ***DOM: Nodos, Elementos y Selectores***

console.log(document.querySelector("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));

// ***DOM: Atributos y Data-Attributes***

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);

// ***DOM: Manejadores de eventos***

function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
    alert("Hola mundo manejador de eventos semántico");
    console.log(e);
    console.log(event);    
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) =>{
    alert("Hola manejador de eventos múltiples");
    console.log(e);
    console.log(e.type);
});