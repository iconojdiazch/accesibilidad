/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function runPersona(){
    alert(persona);
}

function runEmpleado(){
    var e = new Empleado("Un nombre cualquiera");
    alert( e.obtenerNombre());
}

function runEmpleadoPorDefecto(){
    var e = new Empleado();
    alert( e.obtenerNombre());
}

function runJefePorDefecto(){
    var e = new Jefe();
    alert( e.obtenerNombre());
}

// Declaración e inicialización de un objeto partiendo de Object
var persona = new Object();
persona.nombre = "un nombre cualquiera";
persona.edad = 25;
persona.toString = function(){
    return "Soy una persona, mi nombre es '" + this.nombre + "' y tengo " + this.edad + " años";
}

// Declaración e inicialización de un objeto mediante funciones constructoras
function Empleado(nombre){
    this.nombre = nombre || "Sin nombre";
}
Empleado.prototype.obtenerNombre = function(){
    return "Nombre: " + this.nombre;
}

// Creación de una jerarquía de herencia
function Jefe(nombre, sueldo){
    this.sueldo = sueldo || 0.0;
    this.base = Empleado;
    this.base(nombre);
}

Jefe.prototype.obtenerNombre = function(){
    return "Nombre: " + this.nombre + ".Sueldo: " + this.sueldo;
}

//Creación de objetos usando JSON
var arr = [1,2,3];
function runArrayJSON(){
    alert("Resultado: " + arr.toString());
}

var objetoJSON ={
    "nombre": "Un nombre cualquiera",
    "direccion": {
        "calle": "una",
        "ciudad": "otra",
        "pais": "España",
        "codigoPostal": 10021
    },
    "telefonos": [
        "123 456",
        "678 987"
    ]
}
function runObjetoJSON(){
    alert(objetoJSON.nombre);
}

