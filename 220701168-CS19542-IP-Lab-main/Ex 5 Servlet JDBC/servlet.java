import java.io.*;
import java.net.*;
import javax.httpServlet.*;
import javax.servlet.*;

public class BookServlet extends HttpServlet {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/library_db";
    private static final String USER = "your_username";
    private static final String PASSWORD = "your_password";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String bookName = request.getParameter("bookName");
        String author = request.getParameter("author");
        String publisher = request.getParameter("publisher");
        String edition = request.getParameter("edition");
        String price = request.getParameter("price");
        String category = request.getParameter("category");

        if (bookName.isEmpty() || author.isEmpty() || publisher.isEmpty() || edition.isEmpty() || price.isEmpty() || category.isEmpty()) {
            response.sendRedirect("error.jsp"); // Redirect to an error page
            return;
        }

        try (Connection conn = DriverManager.getConnection(JDBC_URL, USER, PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement("INSERT INTO book (book_name, author, publisher, edition, price, category) VALUES (?, ?, ?, ?, ?, ?)")) {

            pstmt.setString(1, bookName);
            pstmt.setString(2, author);
            pstmt.setString(3, publisher);
            pstmt.setInt(4, Integer.parseInt(edition));
            pstmt.setDouble(5, Double.parseDouble(price));
            pstmt.setString(6, category);

            int rowsInserted = pstmt.executeUpdate();

            if (rowsInserted > 0) {
                response.sendRedirect("success.jsp"); // Redirect to a success page
            } else {
                response.sendRedirect("error.jsp"); // Redirect to an error page
            }

        } catch (SQLException e) {
            e.printStackTrace();
            response.sendRedirect("error.jsp"); // Redirect to an error page
        }
    }
}
