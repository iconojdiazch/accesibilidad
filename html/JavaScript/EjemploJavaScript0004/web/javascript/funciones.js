function comprobar(formulario){
	var elUsuario, laClave;
	elUsuario = formulario.usuario.value;
	laClave = formulario.clave.value;
	if( elUsuario == "uno" && laClave == "uno" ){
		return true;
        }
	else{		
                document.all.idUsuario.style.color = "red";
                document.all.idClave.style.color = "red";
                document.all.idMensaje.style.display = "";
                document.all.idMensaje.style.fontSize = "14pt";
                return false;
        }
}
