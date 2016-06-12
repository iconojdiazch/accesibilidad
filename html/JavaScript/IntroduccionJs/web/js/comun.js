/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function mensaje(texto,id){
    var nodo = document.getElementById(id);
    nodo.style.fontSize = "80%";
    nodo.style.color = "blue";
    nodo.innerHTML = texto + ' ' + Date();
}
