package cq.book;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.List;

public class BookDAO {

    private static final SessionFactory factory =
            new Configuration().configure().buildSessionFactory();

    public void saveBook(Book book) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.persist(book);
        tx.commit();
        session.close();
    }

    public List<Book> getAllBooks() {
        Session session = factory.openSession();
        List<Book> list =
                session.createQuery("FROM Book", Book.class).list();
        session.close();
        return list;
    }

    public Book getBook(int id) {
        Session session = factory.openSession();
        @SuppressWarnings("removal")
		Book book = session.get(Book.class, id);
        session.close();
        return book;
    }

    public void updateBook(Book book) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.merge(book);
        tx.commit();
        session.close();
    }

    public void deleteBook(int id) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        @SuppressWarnings("removal")
		Book book = session.get(Book.class, id);
        if (book != null) {
            session.remove(book);
        }
        tx.commit();
        session.close();
    }
}