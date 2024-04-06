var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hellokitty",
  database: "College"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT password FROM student where username = 'harsh1034' ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

