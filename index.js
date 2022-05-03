// dependencies
const mysql = require('mysql2');
const inquirer = require('inquirer');

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
                console.log("option 2");
                appMenu();
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
                console.log("option 5");
                appMenu();
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