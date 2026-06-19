package cq.book;

import java.util.List;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {

        BookDAO dao = new BookDAO();
        Scanner sc = new Scanner(System.in);

        while (true) {

            System.out.println("\n===== BOOK MENU =====");
            System.out.println("1. Add Book");
            System.out.println("2. View Books");
            System.out.println("3. Update Book");
            System.out.println("4. Delete Book");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");

            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    sc.nextLine();

                    System.out.print("Title: ");
                    String title = sc.nextLine();

                    System.out.print("Author: ");
                    String author = sc.nextLine();

                    System.out.print("Category: ");
                    String category = sc.nextLine();

                    System.out.print("Price: ");
                    double price = sc.nextDouble();

                    System.out.print("Available Copies: ");
                    int copies = sc.nextInt();

                    dao.saveBook(new Book(title, author, category, price, copies));
                    System.out.println("Book added!");
                    break;

                case 2:
                    List<Book> books = dao.getAllBooks();
                    for (Book b : books) {
                        System.out.println(b);
                        System.out.println("-----------------");
                    }
                    break;

                case 3:
                    System.out.print("Enter Book ID: ");
                    int uid = sc.nextInt();

                    Book existing = dao.getBook(uid);
                    if (existing == null) {
                        System.out.println("Book not found");
                        break;
                    }

                    sc.nextLine();
                    System.out.print("New Title: ");
                    existing.setTitle(sc.nextLine());

                    System.out.print("New Author: ");
                    existing.setAuthor(sc.nextLine());

                    System.out.print("New Category: ");
                    existing.setCategory(sc.nextLine());

                    System.out.print("New Price: ");
                    existing.setPrice(sc.nextDouble());

                    System.out.print("New Copies: ");
                    existing.setAvailableCopies(sc.nextInt());

                    dao.updateBook(existing);
                    System.out.println("Updated!");
                    break;

                case 4:
                    System.out.print("Enter ID to delete: ");
                    int did = sc.nextInt();
                    dao.deleteBook(did);
                    System.out.println("Deleted!");
                    break;

                case 5:
                    System.out.println("Exit...");
                    sc.close();
                    System.exit(0);

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}