const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let JWT_SECRET = "hellokigahjdfveqjhggdfiuqehdfouie2h9867d86723t4r23grjhv";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// create a new MySQL connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hellokitty',
  database: 'College'
});
// connect to the MySQL database
// con.connect((error) => {
//   if (error) {
//     console.error('Error connecting to MySQL database:', error);
//   } else {
//     console.log('Connected to MySQL database!');
//   }
// });
app.post('/',async (req,res) => {
	const {user,pass} = req.body
	const sql = "select * from student where Username = '"+user+"' ";
	console.log("hello");
	con.query(sql , (err,result) => {
		if(err) return res.json("Error");
		else
		{
			console.log(result[0]['Password']);
			 hello = result[0]['Username']
			 const isMatch =  bcrypt.compare(pass, result[0]['Password']);
			 if (!isMatch) {
			// Password mismatch, return error
				return res.json("Error");
			 }
			 const token = jwt.sign({hello} , JWT_SECRET, { expiresIn: "30m" });
			 console.log("Login successful, generated token:", token);
			 return res.json({ token }); // Send token in the response
		}
	})
})


const PORT = 7869;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});