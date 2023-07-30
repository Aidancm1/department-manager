const mysql = require('mysql2');
const inquirer = require('inquirer');

// Uses inquirer to perform the initial prompt
inquirer.
    prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Please choose an option: ',
            choices: [
                'View all department',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ])
    .then((data) => {
        switch(data.option){
            case 'View all department':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles()
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addADepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
        }
    });

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Iphone1996!',
        database: 'work_db'
    },
    console.log(`Welcome to the Employee Manager!`)
); 

function viewDepartments() {
    const sql = 'SELECT * FROM departments'
    db.query(sql, (err, rows)=>{
        console.log(rows)

    }
    )
};

function viewRoles() {
    const sql = 'SELECT * FROM roles'
    db.query(sql, (err, rows)=>{
        console.log(rows)
}
    )
}; 

function viewEmployees() {
    const sql = 'SELECTION * FROM employees'
    db.query(sql, (err, rows)=> {
        console.log(rows)
    })

};

function addADepartment() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: "departmentName",
            message: "Please input a department name",

        }
    ]).then((response) => {
        // THIS IS AN OBJECT WITH A KEY VALUE PAIR
        console.log(response); 
        console.log(response.departmentName)
        
        const sql = `INSERT INTO departments (name) VALUES (?)`
        db.query(sql, [response.departmentName], (err, rows) => {
            if (err) {
                console.log('There was an error');
                console.log(err);
            }

            console.log(rows)
            viewDepartments();
        })
    } )

}

function addRole() {
     inquirer
     .prompt([
        {
            type: 'input',
            name: "title",
            message: "Please insert the new role",
        }
     ]).then((response) => {
        console.log(response);
        console.log(response.departmentName)

        const sql1 = `INSERT INTO roles (name) VALUES (?)`
        db.query(sql, [response.title], (err, rows) => {
            if (err) {
                console.log('There was an error');
                console.log(err);
            }
            console.log(rows)
            viewRoles();
        })
     })
}

// function addEmployee() {

// }

// function updateEmployee() {

// }

// function updateEmployeeRole() {

// }
