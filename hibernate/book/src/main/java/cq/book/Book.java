package cq.book;

import jakarta.persistence.*;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;

    private String title;
    private String author;
    private String category;
    private double price;

    private int availableCopies;

    public Book() {}

    public Book(String title, String author, String category, double price, int availableCopies) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.price = price;
        this.availableCopies = availableCopies;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getAvailableCopies() {
        return availableCopies;
    }

    public void setAvailableCopies(int availableCopies) {
        this.availableCopies = availableCopies;
    }

    @Override
    public String toString() {
        return "Book ID: " + bookId +
                "\nTitle: " + title +
                "\nAuthor: " + author +
                "\nCategory: " + category +
                "\nPrice: " + price +
                "\nAvailable Copies: " + availableCopies;
    }
}