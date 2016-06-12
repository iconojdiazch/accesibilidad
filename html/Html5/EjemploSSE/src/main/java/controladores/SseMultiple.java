/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package controladores;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Chema
 */
@WebServlet(name = "SseMultiple", urlPatterns = {"/SseMultiple"})
public class SseMultiple extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/event-stream");
        response.setCharacterEncoding("UTF-8");

        PrintWriter writer = response.getWriter();
        int votoSi = 0;
        int votoNo = 0;
        for (int i = 0; i < 20; i++) {

            votoSi = votoSi + (int) (Math.random() * 10);
            votoNo = votoNo + (int) (Math.random() * 10);

            writer.write("event:voto_si\n");
            writer.write("data: " + votoSi + "\n\n");

            writer.write("event:voto_no\n");
            writer.write("data: " + votoNo + "\n\n");

            writer.flush();

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                LOG.log(Level.INFO, "Error", e);
            }
        }
        writer.close();
    }
    private static final Logger LOG = Logger.getLogger(SseMultiple.class.getName());

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
