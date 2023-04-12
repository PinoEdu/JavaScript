(() => {
    // Instanciar el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById("xhr");
    const $fragment = document.createDocumentFragment();

    // Asignar los eventos de la petición
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        console.log(xhr);
        
        if (xhr.status >= 200 && xhr.status < 300){
            console.log("Exito");

            let json = JSON.parse(xhr.responseText);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else{
            console.log("Fracaso");
            let message = xhr.statusText||"Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    });

    // Abrir la petición
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    // Enviar la petición
    xhr.send();
})();