/*
 * FormularioServlet.java
 *
 * Created on 4 de julio de 2007, 10:57
 */

package com.curso.ejemplohtml0003maven;

import java.io.*;
import java.util.Enumeration;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

/**
 *
 * @author user
 * @version
 */
@WebServlet(urlPatterns = "/FormularioServlet")
public class FormularioServlet extends HttpServlet {
    
    /** Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws javax.servlet.ServletException
     * @throws java.io.IOException
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet FormularioServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet FormularioServlet at " + request.getContextPath() + "</h1>");
            mostrarParametros(request,response,out);
            out.println("</body>");
            out.println("</html>");
        }
    }
    
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws javax.servlet.ServletException
     * @throws java.io.IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }
    
    /** Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws javax.servlet.ServletException
     * @throws java.io.IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        processRequest(request, response);
    }
    
    /** Returns a short description of the servlet.
     * @return 
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }
    // </editor-fold>
    
    private void mostrarParametros(HttpServletRequest request, HttpServletResponse response, PrintWriter out) {
        Enumeration e = request.getParameterNames();
        while (e.hasMoreElements()) {
            String elem = (String) e.nextElement();
            String[] valores = request.getParameterValues(elem);
            out.print("Parámetro: " + elem + ".Valor(es): ");
            for (int i = 0; i < valores.length; i++) {
                out.print(valores[i] + " ");
            }
            out.println("<br>");
        }
    }
}

