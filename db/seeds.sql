USE workspace_db;

INSERT INTO department (name)
VALUES ('Front-End Development'),
('Back-End Development'),
('Consumer Relations'),
('HR');

INSERT INTO role (id, title, salary, department_id)
VALUES (101, 'Lead Front-End Dev', 155000, 1),
(102, 'Front-End Dev', 135000, 1),
(201, 'Lead Back-End Dev', 150000, 2),
(202, 'Node Dev', 100000, 2),
(203, 'Python Dev', 130000, 2),
(301, 'Relations Manager', 100000, 3),
(302, 'Sales', 80000, 3),
(303, 'Social Media Manager', 60000, 3),
(304, 'Customer Support', 70000, 3),
(401, 'HR Manager', 100000, 4),
(402, 'Payroll', 55000, 4),
(403, 'Recruiting', 65000, 4),
(404, 'Internal Affairs', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('James', 'Dunn', 101, NULL),
('Elizabeth', 'Jules', 201, NULL),
('Lisa', 'Yuen', 301, NULL),
('Emily', 'Seer', 401, NULL),
('Carl', 'Lee', 102, 1),
('Mary', 'Smith', 102, 1),
('Dave', 'Lear', 202, 2),
('Mike', 'Baker', 203, 2),
('Abdul', 'Romano', 302, 3),
('Jenny', 'Ross', 303, 3),
('John', 'Moore', 304, 3),
('Mark', 'Adams', 402, 4),
('Blake', 'Anderson', 403, 4),
('Robert', 'Peters', 404, 4);