import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DatabaseServlet")
public class DatabaseServlet extends HttpServlet {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/your_database";
    private static final String USER = "your_username";
    private static final String PASS = "your_password";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        String name = request.getParameter("name");
        String ageStr = request.getParameter("age");
        int age = Integer.parseInt(ageStr);

        Connection conn = null;
        PreparedStatement stmt = null;
        PrintWriter out = response.getWriter();
        
        try {
            // Load the JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            // Open a connection
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            // Prepare a SQL statement
            String sql = "INSERT INTO Users (name, age) VALUES (?, ?)";
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setInt(2, age);

            // Execute the query
            int rowsInserted = stmt.executeUpdate();
            
            if (rowsInserted > 0) {
                out.print("Data inserted successfully!");
            } else {
                out.print("Failed to insert data.");
            }

        } catch (Exception e) {
            e.printStackTrace();
            out.print("Error: " + e.getMessage());
        } finally {
            try {
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
    }
}
