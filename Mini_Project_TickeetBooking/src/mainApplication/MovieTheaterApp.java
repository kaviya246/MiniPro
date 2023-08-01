package mainApplication;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

abstract class Entertainment {
    private String name;
    private int duration;
    private int rating;

    public Entertainment(String name, int duration, int rating) {
        this.name = name;
        this.duration = duration;
        this.rating = rating;
    }

    public String getName() {
        return name;
    }

    public int getDuration() {
        return duration;
    }

    public int getRating() {
        return rating;
    }
    public abstract String getType();
}

class Movie extends Entertainment {
    private int id;
    private int numTickets;

    public Movie(int id, String name, int duration, int rating, int numTickets) {
        super(name, duration, rating);
        this.id = id;
        this.numTickets = numTickets;
    }

    public int getId() {
        return id;
    }

    public int getNumTickets() {
        return numTickets;
    }

    public void setNumTickets(int numTickets) {
        this.numTickets = numTickets;
    }

    @Override
    public String getType() {
        return "Movie";
    }

	public void setId(int movieId) {
		// TODO Auto-generated method stub
		
	}
}

class Theater {
    private int id;
    private String name;
    private String location;
    private List<Movie> movies;

    public Theater(int id, String name, String location) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.movies = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void addMovie(Movie movie) {
        movies.add(movie);
    }

    public void removeMovie(Movie movie) {
        movies.remove(movie);
    }
}

public class MovieTheaterApp {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mini_project";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Kaviyag12@";

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            createTablesIfNotExists(connection);

            int choice;
            do {
                System.out.println("Menu:");
                System.out.println("1. Add theater");
                System.out.println("2. Delete theater");
                System.out.println("3. Add movie");
                System.out.println("4. Display theaters");
                System.out.println("5. Display movies");
                System.out.println("6. Book Tickets");
                System.out.println("7. Exit");
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();
                scanner.nextLine(); // Consume the new line character

                switch (choice) {
                    case 1:
                        addTheater(connection);
                        break;
                    case 2:
                        deleteTheater(connection);
                        break;
                    case 3:
                        addMovie(connection);
                        break;
                    case 4:
                        displayTheaters(connection);
                        break;
                    case 5:
                        displayMovies(connection);
                        break;
                    case 6:
                        bookTicket(connection);
                        break;
                    case 7:
                        System.out.println("Exiting program.");
                        break;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            } while (choice != 7);

            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void createTablesIfNotExists(Connection connection) throws SQLException {
        Statement statement = connection.createStatement();
        // Create the tables if they don't exist
        String createTheaterTable = "CREATE TABLE IF NOT EXISTS theaters (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), location VARCHAR(255))";
        String createMovieTable = "CREATE TABLE IF NOT EXISTS movies (id INT AUTO_INCREMENT PRIMARY KEY, theater_id INT, name VARCHAR(255), duration INT, rating INT, num_tickets INT)";

        statement.executeUpdate(createTheaterTable);
        statement.executeUpdate(createMovieTable);

        statement.close();
    }

    private static void addTheater(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String name = scanner.nextLine();
        System.out.print("Enter theater location: ");
        String location = scanner.nextLine();

        insertTheaterIntoDatabase(connection, name, location);

        System.out.println(name + " added successfully!");
    }

    private static void insertTheaterIntoDatabase(Connection connection, String name, String location) throws SQLException {
        String insertQuery = "INSERT INTO theaters (name, location) VALUES (?, ?)";

        PreparedStatement pstmt = connection.prepareStatement(insertQuery, Statement.RETURN_GENERATED_KEYS);
        pstmt.setString(1, name);
        pstmt.setString(2, location);

        pstmt.executeUpdate();

        ResultSet generatedKeys = pstmt.getGeneratedKeys();
        if (generatedKeys.next()) {
            int theaterId = generatedKeys.getInt(1);
            Theater theater = new Theater(theaterId, name, location);
        }

        pstmt.close();
    }

    private static void deleteTheater(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String theaterName = scanner.nextLine();

        int theaterId = findTheaterIdByName(connection, theaterName);

        if (theaterId != -1) {
            deleteMoviesForTheater(connection, theaterId);

            String deleteQuery = "DELETE FROM theaters WHERE id = ?";
            PreparedStatement pstmt = connection.prepareStatement(deleteQuery);
            pstmt.setInt(1, theaterId);
            pstmt.executeUpdate();
            pstmt.close();

            System.out.println(theaterName + " deleted successfully!");
        } else {
            System.out.println(theaterName + " not found.");
        }
    }

    private static int findTheaterIdByName(Connection connection, String theaterName) throws SQLException {
        String query = "SELECT id FROM theaters WHERE name = ?";
        PreparedStatement pstmt = connection.prepareStatement(query);
        pstmt.setString(1, theaterName);
        ResultSet result = pstmt.executeQuery();

        int theaterId = -1;
        if (result.next()) {
            theaterId = result.getInt("id");
        }

        pstmt.close();
        return theaterId;
    }

    private static void deleteMoviesForTheater(Connection connection, int theaterId) throws SQLException {
        String deleteQuery = "DELETE FROM movies WHERE theater_id = ?";
        PreparedStatement pstmt = connection.prepareStatement(deleteQuery);
        pstmt.setInt(1, theaterId);
        pstmt.executeUpdate();
        pstmt.close();
    }

    private static void addMovie(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String theaterName = scanner.nextLine();

        int theaterId = findTheaterIdByName(connection, theaterName);

        if (theaterId != -1) {
            // Prompt user for movie details
            System.out.print("Enter movie name: ");
            String movieName = scanner.nextLine();
            System.out.print("Enter movie duration (in minutes): ");
            int duration = scanner.nextInt();
            System.out.print("Enter movie rating (out of 10): ");
            int rating = scanner.nextInt();
            System.out.print("Enter number of tickets: ");
            int numTickets = scanner.nextInt();

            Movie movie = new Movie(-1, movieName, duration, rating, numTickets);
            insertMovieIntoDatabase(connection, theaterId, movie);

            System.out.println(movie.getName() + " added to " + theaterName + " successfully!");
        } else {
            System.out.println(theaterName + " not found.");
        }
    }

    private static void insertMovieIntoDatabase(Connection connection, int theaterId, Movie movie) throws SQLException {
        String insertQuery = "INSERT INTO movies (theater_id, name, duration, rating, num_tickets) VALUES (?, ?, ?, ?, ?)";

        PreparedStatement pstmt = connection.prepareStatement(insertQuery, Statement.RETURN_GENERATED_KEYS);
        pstmt.setInt(1, theaterId);
        pstmt.setString(2, movie.getName());
        pstmt.setInt(3, movie.getDuration());
        pstmt.setInt(4, movie.getRating());
        pstmt.setInt(5, movie.getNumTickets());

        pstmt.executeUpdate();

        ResultSet generatedKeys = pstmt.getGeneratedKeys();
        if (generatedKeys.next()) {
            int movieId = generatedKeys.getInt(1);
            movie.setId(movieId);
        }

        pstmt.close();
    }

    private static void displayTheaters(Connection connection) throws SQLException {
        Statement statement = connection.createStatement();
        ResultSet result = statement.executeQuery("SELECT * FROM theaters");

        System.out.println("Theaters:");
        while (result.next()) {
            int id = result.getInt("id");
            String name = result.getString("name");
            String location = result.getString("location");
            System.out.println(id + ". " + name + " (" + location + ")");
        }

        statement.close();
    }

    private static void displayMovies(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String theaterName = scanner.nextLine();

        int theaterId = findTheaterIdByName(connection, theaterName);

        if (theaterId != -1) {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM movies WHERE theater_id = ?");
            statement.setInt(1, theaterId);
            ResultSet result = statement.executeQuery();

            if (result.next()) {
                System.out.println("Movies at " + theaterName + ":");
                do {
                    int movieId = result.getInt("id");
                    String movieName = result.getString("name");
                    int duration = result.getInt("duration");
                    int rating = result.getInt("rating");
                    int numTickets = result.getInt("num_tickets");
                    System.out.println(movieId + ". " + movieName + " (" + duration + " mins, " + rating + "/10, Tickets Available: " + numTickets + ")");
                } while (result.next());
            } else {
                System.out.println("No movies found at " + theaterName);
            }

            statement.close();
        } else {
            System.out.println(theaterName + " not found.");
        }
    }

    private static void bookTicket(Connection connection) throws SQLException {
        System.out.print("Enter theater name: ");
        String theaterName = scanner.nextLine();

        int theaterId = findTheaterIdByName(connection, theaterName);

        if (theaterId != -1) {
            System.out.print("Enter movie name: ");
            String movieName = scanner.nextLine();

            int movieId = findMovieIdByName(connection, theaterId, movieName);

            if (movieId != -1) {
                System.out.print("Enter number of tickets to book: ");
                int numTickets = scanner.nextInt();
                scanner.nextLine();

                int availableTickets = findAvailableTicketsForMovie(connection, movieId);
                if (numTickets <= availableTickets) {
                    updateMovieTickets(connection, movieId, availableTickets - numTickets);

                    System.out.println(numTickets + " tickets booked for " + movieName + " at " + theaterName + ".");
                } else {
                    System.out.println("Not enough tickets available.");
                }
            } else {
                System.out.println(movieName + " not found at " + theaterName);
            }
        } else {
            System.out.println(theaterName + " not found.");
        }
    }

    private static int findMovieIdByName(Connection connection, int theaterId, String movieName) throws SQLException {
        String query = "SELECT id FROM movies WHERE theater_id = ? AND name = ?";
        PreparedStatement pstmt = connection.prepareStatement(query);
        pstmt.setInt(1, theaterId);
        pstmt.setString(2, movieName);
        ResultSet result = pstmt.executeQuery();

        int movieId = -1;
        if (result.next()) {
            movieId = result.getInt("id");
        }

        pstmt.close();
        return movieId;
    }

    private static int findAvailableTicketsForMovie(Connection connection, int movieId) throws SQLException {
        String query = "SELECT num_tickets FROM movies WHERE id = ?";
        PreparedStatement pstmt = connection.prepareStatement(query);
        pstmt.setInt(1, movieId);
        ResultSet result = pstmt.executeQuery();

        int availableTickets = 0;
        if (result.next()) {
            availableTickets = result.getInt("num_tickets");
        }

        pstmt.close();
        return availableTickets;
    }

    private static void updateMovieTickets(Connection connection, int movieId, int newTicketCount) throws SQLException {
        String updateQuery = "UPDATE movies SET num_tickets = ? WHERE id = ?";
        PreparedStatement pstmt = connection.prepareStatement(updateQuery);
        pstmt.setInt(1, newTicketCount);
        pstmt.setInt(2, movieId);
        pstmt.executeUpdate();
        pstmt.close();
    }
}
