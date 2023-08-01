const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "Iphone1996!",
      database: "work_db",
    },
    console.log(`Welcome to the Employee Manager!`)
  );

  connection.connect(function(err){
    if(err) throw err;
  });



  module.exports = connection;