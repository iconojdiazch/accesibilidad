<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Fecha y hora</title>
        <script type="text/javascript" src="js/prototype.js"></script>
        <script>
            actualizar = function () {
                new Ajax.PeriodicalUpdater('fechaHora','fecha.jsp',
                {
                    method: 'get', frequency: 5
                }
            );
            }
        </script>
    </head>
    <body>
        <h2>Uso de <i>Ajax</i> con la biblioteca <a href="http://www.prototypejs.org/">Prototype</a></h2>
        <h3>Empleando una clase de utilidad de la biblioteca, Ajax env&iacute;a una petici&oacute;n al <i>servidor</i>
        peri&oacute;dicamente. El nuevo contenido se coloca en su lugar autom&aacute;ticamente.</h3>
        <h3>Si los datos recibidos del servidor no cambian, la pr&oacute;xima petici&oacute;n se enviará m&aacute;s tarde, tambi&eacute;n de forma autom&aacute;tica.</h3>
        <h3>En cuanto los datos recibidos cambien, el per&iacute;odo de env&iacute;o se <a href="http://www.prototypejs.org/api/ajax/periodicalUpdater">autoajusta</a> a los valores iniciales.</h3>
        <button type="button" onclick="actualizar();">Comenzar</button>
        Fecha y hora:&nbsp;<span id="fechaHora"></span>
    </body>
</html>
