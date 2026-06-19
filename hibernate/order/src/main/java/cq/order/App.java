package cq.order;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Scanner;

public class App {

    public static void main(String[] args) throws Exception {

        OrderDAO dao = new OrderDAO();
        Scanner sc = new Scanner(System.in);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        while (true) {

            System.out.println("\n===== ORDER MENU =====");
            System.out.println("1. Place Order");
            System.out.println("2. View Orders");
            System.out.println("3. Update Order");
            System.out.println("4. Delete Order");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");

            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    sc.nextLine();

                    System.out.print("Customer Name: ");
                    String name = sc.nextLine();

                    System.out.print("Food Item: ");
                    String food = sc.nextLine();

                    System.out.print("Quantity: ");
                    int qty = sc.nextInt();

                    System.out.print("Total Amount: ");
                    double total = sc.nextDouble();

                    sc.nextLine();
                    System.out.print("Order Date (yyyy-MM-dd): ");
                    String dateStr = sc.nextLine();

                    System.out.print("Order Status: ");
                    String status = sc.nextLine();

                    Order order = new Order(
                            name, food, qty, total,
                            sdf.parse(dateStr), status
                    );

                    dao.saveOrder(order);
                    System.out.println("Order placed!");
                    break;

                case 2:
                    List<Order> list = dao.getAllOrders();
                    for (Order o : list) {
                        System.out.println(o);
                        System.out.println("-------------------");
                    }
                    break;

                case 3:
                    System.out.print("Enter Order ID: ");
                    int uid = sc.nextInt();

                    Order existing = dao.getOrder(uid);
                    if (existing == null) {
                        System.out.println("Order not found");
                        break;
                    }

                    sc.nextLine();

                    System.out.print("New Status: ");
                    existing.setOrderStatus(sc.nextLine());

                    dao.updateOrder(existing);
                    System.out.println("Updated!");
                    break;

                case 4:
                    System.out.print("Enter ID to delete: ");
                    int did = sc.nextInt();
                    dao.deleteOrder(did);
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