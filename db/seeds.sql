USE workspace_db;

INSERT INTO department (name)
VALUES ('Front-End Development'),
('Back-End Development'),
('Consumer Relations'),
('HR');

INSERT INTO roles (title, salary, department_id)
VALUES ('Lead Front-End Dev', 155000, 1),
('Front-End Dev', 135000, 1),
('Lead Back-End Dev', 150000, 2),
('Node Dev', 100000, 2),
('Python Dev', 130000, 2),
('Relations Manager', 100000, 3),
('Sales', 80000, 3),
('Social Media Manager', 60000, 3),
('Customer Support', 70000, 3),
('HR Manager', 100000, 4),
('Payroll', 55000, 4),
('Recruiting', 65000, 4),
('Internal Affairs', 60000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('James', 'Dunn', 1, NULL),
('Elizabeth', 'Jules', 3, NULL),
('Lisa', 'Yuen', 6, NULL),
('Emily', 'Seer', 10, NULL),
('Carl', 'Lee', 2, 1),
('Mary', 'Smith', 2, 1),
('Dave', 'Lear', 4, 2),
('Mike', 'Baker', 5, 2),
('Abdul', 'Romano', 7, 3),
('Jenny', 'Ross', 8, 3),
('John', 'Moore', 9, 3),
('Mark', 'Adams', 11, 4),
('Blake', 'Anderson', 12, 4),
('Robert', 'Peters', 13, 4);