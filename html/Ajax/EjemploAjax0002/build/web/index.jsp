<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <title>Camisetas</title>
        <script type="text/javascript" src="js/prototype.js"></script>
        <script type="text/javascript" >
            function actualizarTallas() {
                if ($F('color')=='') return;
                new Ajax.Request('bdsimulada.jsp?color=' + $F('color'),
                {
                    method: 'get',
                    onSuccess: mostrarTallas,
                    onFailure: function(r) {
                        throw new Error( 'Error al cargar las tallas: ' +
                            r.statusText );
                    }
                }
            );
            }
            function mostrarTallas(r) {
                eval('var tam=' + r.responseText);
                var talla = $('talla');
                while (talla.options.length != 1) talla.remove(1);
                for (var n = 0; n < tam.length; n++) {
                    talla.add(new Option(tam[n],tam[n]), document.all ? 0 : null);
                }
                talla.disabled = false;
            }
        </script>
    </head>
    <body>
        <h2>Uso de <i>Ajax</i> con la biblioteca <a href="http://www.prototypejs.org/">Prototype</a></h2>
        <h3>Esta aplicaci&oacute;n, dado un color de camiseta, obtiene del <i>servidor</i> las tallas disponibles.</h3>
        <form action="simulada.jsp" name="camisetaForm">
            <label>Color: </label>
            <select name="color" id="color" onchange="actualizarTallas();">
                <option value="">Seleccionar color</option>
                <option value="verde">Verde</option>
                <option value="azul">Azul</option>
                <option value="amarillo">Amarillo</option>
                <option value="rojo">Rojo</option>
            </select>
            <label>Talla:</label>
            <select name="talla" id="talla" disabled="disabled">
                <option value="">Seleccionar talla</option>
            </select>
            <input type="submit"/>
        </form>
    </body>
</html>
