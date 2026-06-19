package cq.employee;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Scanner;

public class App {

    public static void main(String[] args) throws Exception {

        EmployeeDAO dao = new EmployeeDAO();
        Scanner sc = new Scanner(System.in);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        while (true) {

            System.out.println("\n===== EMPLOYEE MENU =====");
            System.out.println("1. Add Employee");
            System.out.println("2. View Employees");
            System.out.println("3. Update Employee");
            System.out.println("4. Delete Employee");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");

            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    sc.nextLine();

                    System.out.print("Name: ");
                    String name = sc.nextLine();

                    System.out.print("Department: ");
                    String dept = sc.nextLine();

                    System.out.print("Salary: ");
                    double salary = sc.nextDouble();

                    sc.nextLine();
                    System.out.print("Joining Date (yyyy-MM-dd): ");
                    String dateStr = sc.nextLine();

                    Employee emp = new Employee(
                            name, dept, salary, sdf.parse(dateStr)
                    );

                    dao.saveEmployee(emp);
                    System.out.println("Employee saved!");
                    break;

                case 2:
                    List<Employee> list = dao.getAllEmployees();
                    for (Employee e : list) {
                        System.out.println(e);
                        System.out.println("-------------------");
                    }
                    break;

                case 3:
                    System.out.print("Enter ID to update: ");
                    int uid = sc.nextInt();

                    Employee existing = dao.getEmployee(uid);
                    if (existing == null) {
                        System.out.println("Employee not found");
                        break;
                    }

                    sc.nextLine();
                    System.out.print("New name: ");
                    existing.setEmployeeName(sc.nextLine());

                    System.out.print("New department: ");
                    existing.setDepartment(sc.nextLine());

                    System.out.print("New salary: ");
                    existing.setSalary(sc.nextDouble());

                    dao.updateEmployee(existing);
                    System.out.println("Updated!");
                    break;

                case 4:
                    System.out.print("Enter ID to delete: ");
                    int did = sc.nextInt();
                    dao.deleteEmployee(did);
                    System.out.println("Deleted!");
                    break;

                case 5:
                    System.out.println("Exiting...");
                    sc.close();
                    System.exit(0);

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}