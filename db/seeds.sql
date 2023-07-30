INSERT INTO departments (name)
VALUES ("Engineering"),
        ("Finance"),
        ("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 80000, 2),
        ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Account Manager", 160000, 2);


-- Not sure about role_id, and manager_id
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES      ("John", "Doe", 1, NULL),
            ("Ashley", "Rodriguez", 2, NULL),
            ("Kevin", "Tupik", 3, NULL);


