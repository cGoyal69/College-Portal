import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

let hello = ''
app.post('/login',async (req,res) => {
	const {user,pass} = req.body
	const sql = "select * from student where Username = '"+user+"' ";
	console.log("hello");
	con.query(sql , async (err,result) => {
		if(err) return res.json("Error");
		else
		{
			console.log(result[0]['Password']);
			 hello = result[0]['Username']
			 const isMatch =  await bcrypt.compare(pass, result[0]['Password']);
             console.log(isMatch);
			if (isMatch) {
                const token = jwt.sign({user} , JWT_SECRET, { expiresIn: "30m" });
                console.log("Login successful, generated token:", token);
                return res.json({ token }); // Send token in the response
			}
			else
            {
                return res.json("Error");
            }
		}
	})
})



app.post('/user-details', async (req, res) => {
    const {tok} = req.body;   
    console.log("Received request for user:", tok);
    try {
            const User = jwt.verify(tok, JWT_SECRET, (err,res)=>{
                if(err)
                {
                    return "token expired";
                }
                return res;
            });
            console.log(User.hello)
            if (User==="token expired") {
                return res.send({status: "error" , data : "token expired"});
            }
            else
            {
                const sql = "select * from student where Username = '"+User.hello+"' ";
                con.query(sql , async (err,result) => {
                    if(err) return res.json("Error");
                        else
                        {
                            console.log(result);
                            return res.json(result);
                        }  
                })
            }
        }
    catch (error) {
        console.error("Error retrieving student data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.post("/reset-password", async (req,res) => {
    let h = '';
    const{ tok, password } = req.body;
    try {
            const User = jwt.verify(tok, JWT_SECRET, (err,res)=>{
            if(err)
            {
                return "token expired";
            }
            return res;
            });
            console.log(User);
            if (User==="token expired") {
            return res.json({status: "error" , data : "Error"});
            }
            else
            {
                const sql = "select * from student where Username = '"+User.user+"' ";
                con.query(sql , async (err,result) => {
                    if(err) return res.json("Error");
                        else
                        {
                        
                            const encryptyedPassword = await bcrypt.hash(password,10);
                            console.log(encryptyedPassword);
                                        //console.log(result);
                                        const sql = "update student set Password = '"+encryptyedPassword+"' where Username = '"+User.user+"' ";
                                        console.log(User.user);
                                        con.query(sql , async (err,result1) => {
                                            if(err) return res.json("Error");
                                                else
                                                {
                                                    h = "done";
                                                    return res.json(h);
                                                }  
                                        })
                                   
                        }  
                })
            }
        }
        catch (error) {
            console.error("Error retrieving student data:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    
});

app.post("/reset-pass", async (req,res) => {
    let h = '';
    const{ user, password } = req.body;
    try {
                const encryptyedPassword = await bcrypt.hash(password,10);
                            console.log(encryptyedPassword);
                                        //console.log(result);
                                        const sql = "update student set Password = '"+encryptyedPassword+"' where Username = '"+user+"' ";
                                        console.log(user);
                                        con.query(sql , async (err,result1) => {
                                            if(err) return res.json("Error");
                                                else
                                                {
                                                    h = "done";
                                                    return res.json(h);
                                                }  
                                        })
        }
        catch (error) {
            console.error("Error retrieving student data:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    
});