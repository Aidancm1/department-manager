const { viewDepartments,viewRoles,viewEmployees } = require("./db/index");
const inquirer = require("inquirer");

// Uses inquirer to perform the initial prompt
async function mainPrompt() {
  console.log("hello");
  const mainPrompt = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "Please choose an option: ",
      choices: [
        "View all department",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ]);

  menuSelection(mainPrompt);
}

async function menuSelection(mainChoices) {
  switch (mainChoices.option) {
    case "View all department":
      const depts = await viewDepartments();
      console.table(depts);
      mainPrompt()
      break;
    case "View all roles":
        console.log('inside view all roles switch')
      const roles = await viewRoles();
      console.table(roles);
      mainPrompt()
      break;
    case "View all employees":
      const employees = await viewEmployees();
      console.table(employees)
      mainPrompt()
      break;
    case "Add a department":
      addADepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an employee role":
      updateEmployeeRole();
      break;
  }
}


async function addADepartment() {
  const deptPrompt = await inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "Please input a department name",
    },
  ]);

  //.then((response) => {
  // THIS IS AN OBJECT WITH A KEY VALUE PAIR
  console.log(deptPrompt);
  console.log(deptPrompt.departmentName);

  const sql = `INSERT INTO departments (name) VALUES (?)`;

  await db.promise().query(sql, [deptPrompt.departmentName], (err, rows) => {
    if (err) {
      console.log("There was an error");
      console.log(err);
    }

    console.log(rows);
  });
  mainPrompt();
}

async function addRole() {
  const rolePrompt = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please insert the new role",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the new role?",
    },
    {
      //put in logic to select the department
    },
  ]);

  console.log(rolePrompt);

  //  .then((response) => {
  //     console.log(response);
  //     console.log(response.title)

  const sql1 = `INSERT INTO roles SET ?`;
  const newData = await db
    .promise()
    .query(sql1, [rolePrompt.title], (err, rows) => {
      if (err) {
        console.log("There was an error");
        console.log(err);
      }
      console.log("dnejw");
      console.log(rows);
      viewRoles();
    });
  //  })
}
// const employeeQuestions = [
//     {
//         message: "Please enter employee first name",
//         type: "input",
//         name: "firstName"
//     },
//     {
//         message: "Please enter employee last name",
//         type: "input",
//         name: "lastName"
//     },
//     {
//         message: "Please enter employee role ID",
//         type: "input",
//         name: "roleId"
//     },
//     {
//         message: "Please enter manager ID",
//         type: "input",
//         name: "managerId"
//     }
// ]
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Please insert new employee name",
      },
    ])
    .then((response) => {
      console.log(response);
      console.log(response.firstName);

      const sql2 = `INSERT INTO employees (name) VALUES (?)`;
      db.query(sql2, [response.firstName], (err, rows) => {
        if (err) {
          console.log("There was an error");
          console.log(err);
        }
        console.log(rows);
        viewEmployees();
      });
    });
}

// function updateEmployee() {

// }

// function updateEmployeeRole() {

// }

function init() {
  mainPrompt();
}

init();
