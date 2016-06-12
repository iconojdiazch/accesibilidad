window.onload=function(){
    var saludo=document.getElementById('saludo');
    saludo.className='contenido_existente';
    var vacio=document.getElementById('vacio');
    addNode(vacio,"Texto uno");
    addNode(vacio,"Texto dos");
    var descendientes=vacio.childNodes;
    for (var i=0;i<descendientes.length;i++){
        descendientes[i].className='contenido_generado';
    }
    vacio.style.border='solid green 2px';
    vacio.style.width="200px";
}

function addNode(el,text){
    var descendiente=document.createElement("div");
    el.appendChild(descendiente);
    var txtNode=document.createTextNode(text);
    descendiente.appendChild(txtNode);
}


