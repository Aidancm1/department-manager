INSERT INTO departments (id, department_id)
VALUES (001, "Engineering"),
        (002, "Finance"),
        (003, "Legal")


INSERT INTO roles (title_id, salary_id, department_id)
VALUES     ("Salesperson", 80000, "Sales"),
           ("Lead Engineer", 150000, "Engineering"),
           ("Software Engineer", 120000, "Engineering"),
           ("Account Manager", 160000, "Finance"),


-- Not sure about role_id, and manager_id
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES      ("John", "Doe", 1, 2)
            ("Ashley", "Rodriguez", 2, 3)
            ("Kevin", "Tupik", 3, 4)


