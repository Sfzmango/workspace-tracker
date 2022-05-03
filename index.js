// dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// declaring PORT
const PORT = process.env.PORT || 3001;

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'workspace_db'
    },
    console.log('Connected to the workspace_db database.')
);

// options
const menuArr = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"];
const rolesArr = ['Lead Front-End Dev', 'Front-End Dev', 'Lead Back-End Dev', 'Node Dev', 'Python Dev', 'Relations Manager', 'Sales', 'Social Media Manager', 'Customer Support', 'HR Manager', 'Payroll', 'Recruiting', 'Internal Affairs'];

function appMenu() {
    inquirer
        .prompt([
            {
                name: 'selectedOption',
                type: 'list',
                message: "Please select an option: ",
                choices: menuArr,
            }
        ])
        .then((res) => {
            console.log(res);
            if (res.selectedOption === menuArr[7]) {

                // exits the program if quit is selected
                console.log("Thank you for using this program!");
                process.exit(1);
            }
            else if (res.selectedOption === menuArr[0]) {
                db.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.name, roles.salary, employees.manager_id FROM employees JOIN roles ON employees.role_id = roles.id JOIN department ON roles.department_id = department.id', function (err, results) {
                    console.log("  Pulling employees data...")
                    console.table(results);
                });
                appMenu();
            }
            else if (res.selectedOption === menuArr[1]) {
                inquirer
                    .prompt([
                        {
                            name: 'firstName',
                            type: 'input',
                            message: "What is the employee's first name?",
                        },
                        {
                            name: 'lastName',
                            type: 'input',
                            message: "What is the employee's last name?",
                        },
                        {
                            name: 'roleId',
                            type: 'list',
                            message: "What is the employee's role?",
                            choices: rolesArr
                        },
                        {
                            name: 'managerId',
                            type: 'input',
                            message: "What is the employee's manager's id? (Write 'NULL' if they are the manager)",
                        }
                    ])
                    .then((res) => {
                        console.log(res);
                        db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (${res.firstName}, ${res.lastName}, ${res.roleId}, ${res.managerId})`, function (err, results) {
                            console.log("  Adding employees data...")
                            console.table(results);
                            console.log("Done");
                        });
                        appMenu();
                    })
            }
            else if (res.selectedOption === menuArr[2]) {
                console.log("option 3");
                appMenu();
            }
            else if (res.selectedOption === menuArr[3]) {
                db.query('SELECT * FROM roles', function (err, results) {
                    console.log("  Pulling roles data...")
                    console.table(results);
                });
                appMenu();
            }
            else if (res.selectedOption === menuArr[4]) {
                inquirer
                    .prompt([
                        {
                            name: 'title',
                            type: 'input',
                            message: "What is the role's title?",
                        },
                        {
                            name: 'salary',
                            type: 'input',
                            message: "What is the role's salary?",
                        },
                        {
                            name: 'departmentId',
                            type: 'input',
                            message: "What is the role's department id?",
                        }
                    ])
                    .then((res) => {
                        console.log(res);
                        db.query(`INSERT INTO roles (title, salary, department_id) VALUES (${res.title}, ${res.salary}, ${res.departmentId})`, function (err, results) {
                            console.log("  Adding roles data...")
                            console.table(results);
                            console.log("Done");
                        });
                        appMenu();
                    })
            }
            else if (res.selectedOption === menuArr[5]) {
                db.query('SELECT * FROM department', function (err, results) {
                    console.log("  Pulling departments data...")
                    console.table(results);
                });
                appMenu();
            }
            else if (res.selectedOption === menuArr[6]) {
                console.log("option 7");
                appMenu();
            }
        })
}

appMenu();

