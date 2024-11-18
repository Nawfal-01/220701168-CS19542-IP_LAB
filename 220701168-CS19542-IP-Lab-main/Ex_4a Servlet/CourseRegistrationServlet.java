import java.io.*;
import java.net.*;
import javax.httpServlet.*;
import javax.servlet.*;

public class CourseRegistrationServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter pw = res.getWriter();

        String name = req.getParameter("name");
        String roll = req.getParameter("roll");
        String gender = req.getParameter("gender");
        String year = req.getParameter("year");
        String dept = req.getParameter("dept");
        String section = req.getParameter("section");
        String mobile = req.getParameter("mobile");
        String email = req.getParameter("email");
        String address = req.getParameter("address");
        String city = req.getParameter("city");
        String country = req.getParameter("country");
        String pincode = req.getParameter("pincode");

        // Displaying the data
        pw.println("<html><body>");
        pw.println("<h2>Course Registration Details</h2>");
        pw.println("<p>Name: " + name + "</p>");
        pw.println("<p>Roll No: " + roll + "</p>");
        pw.println("<p>Gender: " + gender + "</p>");
        pw.println("<p>Year: " + year + "</p>");
        pw.println("<p>Department: " + dept + "</p>");
        pw.println("<p>Section: " + section + "</p>");
        pw.println("<p>Mobile No: " + mobile + "</p>");
        pw.println("<p>Email ID: " + email + "</p>");
        pw.println("<p>Address: " + address + "</p>");
        pw.println("<p>City: " + city + "</p>");
        pw.println("<p>Country: " + country + "</p>");
        pw.println("<p>Pincode: " + pincode + "</p>");
        pw.println("</body></html>");
    }
}
