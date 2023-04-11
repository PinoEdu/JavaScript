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

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}`);
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

// ***Eventos con parametros y remover eventos***

$eventoMultiple.addEventListener('click', () => {
    saludar()
    saludar("Eduardo");
});

const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {
    alert(`Removiendo el evento del tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener('dblclick', removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);

// ***DOM: Flujo de eventos***
const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
    console.log(`Hola ${this.className}, el click lo originó ${e.target.className}`);
    e.stopPropagation();    //Detener la propagación del forEach
}

console.log($divsEventos);

$divsEventos.forEach((div) =>{
/*     div.addEventListener("click", flujoEventos,{
        capture: false,
        once: true
    }); */

    div.addEventListener("click", flujoEventos);
})

$linkEventos.addEventListener("click", e => {
    alert(`Holaaaaaaaaaaaaaaaaaaaaaa`);
    e.preventDefault(); // Cancelar la accion que se tenga por default
})

// ***BOM: Propiedades y Eventos***
window.addEventListener("resize", (e) =>{
    console.clear();
    console.log("***Evento Resize***");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerHeight);
    console.log(window.outerWidth);
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

window.addEventListener("scroll", (e) =>{
    console.clear();
    console.log("***Evento Scroll***");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

window.addEventListener("load", (e) =>{

    console.log("***Evento Load***");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded", e => {
    console.log("***Evento DOMContentLoaded***");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

const $btnAbrir = document.getElementById('abrir-ventana');
const $btnCerrar = document.getElementById('cerrar-ventana');
const $btnImprimir = document.getElementById('imprimir-ventana');

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://youtube.com");
});

$btnCerrar.addEventListener("click", e => {
    ventana.close();
});
$btnImprimir.addEventListener("click", e => {
    window.print();
});