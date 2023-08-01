const connection = require("./connection");

const viewDepartments = async () => {
  console.log("inside viewDepartments");
  const query = "SELECT * FROM departments;";

  const [rows] = await connection.promise().query(query);
  console.log(rows);
  return rows;
};

const viewRoles = async () => {
  console.log("inside roles");
  const query = "SELECT * FROM roles;";
  const [rows] = await connection.promise().query(query);
  console.table(rows);
  return rows;
  //code to view roles
};

const viewEmployees = async () => {
    console.log("inside employees");
    const query = 'SELECT * FROM employees;';
    const [rows] = await connection.promise().query(query);
    console.table(rows);
    return rows;
  //code to view employees
};
module.exports = { viewDepartments, viewRoles, viewEmployees };
