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

(() => {
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
        console.log(json);
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    }).finally(() => {
        console.log("Se ejecutará independiente de lo que ocurra previamente");
    });
})();


(() => {
    const $fetchASync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await res.json();
             
            console.log(res,json);
            
            if(!res.ok) throw {status: res.status, statusText: res.statusText}

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchASync.appendChild($fragment);
        } catch(err){
            console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $fetchASync.innerHTML = `Error ${er.status}:${message}`;
        } finally{
            console.log("Se ejecutará igualmente")
        }
    }

    getData();
})();