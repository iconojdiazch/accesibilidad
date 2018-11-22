window.addEventListener(
    "load",
    () =>{
        const lista = document.querySelectorAll("a");     
        Array.prototype.forEach.call(
            lista,
            elem => elem.style.display="block"
        );   
        // for( elem of lista){
        //     elem.style.display="block";
        // }
        const nodo = document.querySelector("#skip");                
        nodo.addEventListener(
            "focus",
            () =>{
                console.log("El enlace invisible ha recibido el foco");                
            }
        );
    }
);