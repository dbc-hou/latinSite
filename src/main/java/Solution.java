package main.java;
import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        String driver = "com.mysql.jdbc.Driver";
        String protocol = "jdbc:mysql://localhost/";
        String db = "latin_db";
        String username = "root";
        String password = "Codeup;"

        Properties props = new Properties();
        props.put("user", username);
        props.put("password", password);

        Connection conn;
        Statement s;
        ResultSet rs;

        String selectQuery = "SELECT * from verbs";
    }
}
