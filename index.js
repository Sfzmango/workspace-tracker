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

