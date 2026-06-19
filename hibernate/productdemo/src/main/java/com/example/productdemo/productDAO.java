package com.example.productdemo;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class productDAO {

  
    private static final SessionFactory factory =
            new Configuration().configure().buildSessionFactory();

  
    public void saveProduct(product product) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.persist(product);
        tx.commit();
        session.close();
    }

  
    public List<product> getAllProducts() {
        Session session = factory.openSession();
        List<product> products =
                session.createQuery("FROM product", product.class).list();
        session.close();
        return products;
    }

   
    @SuppressWarnings("removal")
	public product getProduct(int id) {
        Session session = factory.openSession();
        product product = session.get(product.class, id);
        session.close();
        return product;
    }

   
    public void updateProduct(product product) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        session.merge(product);
        tx.commit();
        session.close();
    }

    
    @SuppressWarnings("removal")
	public void deleteProduct(int id) {
        Session session = factory.openSession();
        Transaction tx = session.beginTransaction();
        product product = session.get(product.class, id);
        if (product != null) {
            session.remove(product);
        }
        tx.commit();
        session.close();
    }
}
