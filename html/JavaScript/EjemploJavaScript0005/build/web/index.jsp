<%-- 
    Document   : index
    Created on : 15-abr-2008, 21:47:43
    Author     : user
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script type="text/javascript">
            function verInnerText(){
                var a;
                a = document.getElementById("p2").innerText;
                window.alert(a);
            }
            function cambiarContenido(){
                var a;
                a = document.getElementById("p1").innerHTML;
                window.alert(a);
                document.getElementById("p2").innerHTML = a;
                document.getElementById("p1").style.fontSize="150%";
            }
        </script>
    </head>
    <body>
        <p id="p1" style="cursor:pointer" onclick="cambiarContenido()">Texto de prueba en <b>negrita</b></p>
        <p id="p2" onclick="verInnerText()">Hueco para insertar</p>
    </body>
</html>
