<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Fecha y hora</title>
        <script type="text/javascript" src="js/prototype.js"></script>
        <script type="text/javascript" >
            actualizar = function () {
                new Ajax.Updater('fechaHora','fecha.jsp');
            }
        </script>
    </head>
    <body>
        <h2>Uso de <i>Ajax</i> con la biblioteca <a href="http://www.prototypejs.org/">Prototype</a></h2>
        <h3>Cuando pulsamos el bot&oacute;n, obtenemos la fecha y la hora del <i>servidor</i>.</h3>
        <h3>Empleando una clase de utilidad de la biblioteca, el nuevo contenido se coloca en su lugar autom&aacute;ticamente.</h3>
        <button type="button" onclick="actualizar();">Ver fecha y hora</button>
        <span id="fechaHora"></span>
    </body>
</html>
