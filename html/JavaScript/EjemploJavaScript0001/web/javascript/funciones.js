var lista = new Array(2);
lista[0] = new Usuario("uno","uno");
lista[1] = new Usuario("dos","dos");
lista[2] = new Usuario("tres","tres");

function Usuario(nombre,clave){
	this.nombre = nombre;
	this.clave = clave;
}

function localizarUsuarioYClave(u,c){
	for( i = 0; i < lista.length; i++ ){
		if( (u == lista[i].nombre) && (c == lista[i].clave))
			return true;
	}
	return false;
}
function comprobar(formulario){
	var elUsuario, laClave;
	elUsuario = formulario.usuario.value;
	laClave = formulario.clave.value;
	if( localizarUsuarioYClave(elUsuario,laClave) )
		window.location.href = "opciones.html";
	else
		alert("Por favor, vuelva a introducir el nombre de usuario y la clave de acceso");
}
