<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:choose>
    <c:when test="${param.color =='rojo'}">
        ['Pequeña','Media','XXXL']
    </c:when>
    <c:when test="${param.color =='verde'}">
        ['Media','Grande','XL']
    </c:when>
    <c:when test="${param.color =='azul'}">
        ['Pequeña','Media','Grande','XL','XXL','XXXL']
    </c:when>
    <c:when test="${param.color =='amarillo'}">
        ['Pequeña','Media','Grande','XL','XXL']
    </c:when>
</c:choose>
