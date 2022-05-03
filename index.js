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
                console.log("option 1");
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
                console.log("option 4");
                appMenu();
            }
            else if (res.selectedOption === menuArr[4]) {
                console.log("option 5");
                appMenu();
            }
            else if (res.selectedOption === menuArr[5]) {
                console.log("option 6");
                appMenu();
            }
            else if (res.selectedOption === menuArr[6]) {
                console.log("option 7");
                appMenu();
            }
        })
}

appMenu();