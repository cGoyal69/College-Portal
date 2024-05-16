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

app.post('/login',async (req,res) => {
	const {user,pass} = req.body
    let hello = "";
	const sql = "select * from student where roll = '"+user+"' ";
	console.log("hello");
    let course = "";
	con.query(sql , async (err,result) => {
		if(err) return res.json("Error");
		else
		{
			console.log(result[0]['password']);
			hello = result[0]['username']
			const isMatch =  await bcrypt.compare(pass, result[0]['password']);
            console.log(isMatch);
			if (isMatch) {
                let token = jwt.sign({user} , JWT_SECRET, { expiresIn: "30m" });
                console.log("Login successful, generated token:", token);
                return res.json({ token });      // Send token in the response
			}
			else
            {
                return res.json("Error");
            }
		}
	})
    console.log(course)
    
});

app.post('/user-details', async (req, res) => {
    const token = req.body;
    console.log(token.studentToken);
    console.log("Userdetails Received request for user:", token.studentToken);
    try {
            const User = jwt.verify(token.studentToken, JWT_SECRET, (err,res)=>{
                if(err)
                {
                    return "token expired";
                }
                return res;
            });
            console.log(User)
            if (User==="token expired") {
                return res.send({status: "error" , data : "token expired"});
            }
            else
            {
                const sql = "select * from student where roll = '"+User.user+"' ";
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

app.post('/courses', async (req, res) => {
  const token = req.body;
    console.log(token.studentToken);
    console.log("Userdetails Received request for user:", token.studentToken);
    try {
            const User = jwt.verify(token.studentToken, JWT_SECRET, (err,res)=>{
                if(err)
                {
                  return "token expired";
              }
              return res;
          });
          console.log(User)
          if (User==="token expired") {
              return res.send({status: "error" , data : "token expired"});
          }
          else
          {
              const sql = "select * from courses where dept_id in (select dept_id from student where roll = '"+User.user+"') ";
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

app.post('/attendence', async (req, res) => {
  const token = req.body;
  console.log(token.studentToken);
  console.log("Userdetails Received request for user:", token.studentToken);
  try {
          const User = jwt.verify(token.studentToken, JWT_SECRET, (err,res)=>{
              if(err)
              {
                  return "token expired";
              }
              return res;
          });
          console.log(User)
          if (User==="token expired") {
              return res.send({status: "error" , data : "token expired"});
          }
          else
          {
              const sql = "select * from attendence where ccode in (select ccode from courses where dept_id in (select dept_id from student where roll = '"+User.user+"') and roll = '"+User.user+"') ";
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

app.post('/grade', async (req, res) => {
    const tok = req.body;
    console.log('Grade Token Receive : ' ,tok);
    const courses = tok.studentT.courses;
   //console.log(courses);
    const coursesList = [];
    courses.forEach((course) => {
      coursesList.push(course.ccode);
    });
    console.log(coursesList);
    console.log("token in Grade:", tok.studentT.token);
    try {
      const User = jwt.verify(tok.studentT.token, JWT_SECRET, (err, res) => {
        if (err) return "token expired";
        return res;
      });
      console.log("Details received :", User);
      if (User === "token expired") {
        return res.send({ status: "error", data: "token expired" });
      } else {
        const coursedataFetch = async (coursesList) => {
          let courseDetails = [];
          for (const course of coursesList) {
            const sql = `select * from ${course} where roll = '${User.user}'`;
            try {
              const result = await new Promise((resolve, reject) => {
                con.query(sql, (err, data) => {
                  if (err) reject(err);
                  else resolve(data);
                });
              });
              if(result.length > 0){
              //console.log(result[0])
              const sql1 = `select * from courses where ccode = '${course}'`;
              try {
                const result1 = await new Promise((resolve, reject) => {
                  con.query(sql1, (err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                  });
                });
                    for(let i = 0; i < result.length; i++)
                    {
                        result[i]['cname'] = result1[0]['cname'];
                        result[i]['credit'] = result1[0]['credit'];
                        result[i]['ccode'] = course;
                    }
                }
                

                catch (error) {
                    console.error("Error fetching data for course:", course, error);
                    // Handle individual course query errors (optional)
                  }
                // const sql1 = "select ccode from courses";
                // con.query(sql1 , async (err,courses) => {
                //     if(err) return res.json("Error");
                //     else
                //     {
                //         return res.json({ token, courses });
                //     }
                // })
                for(let i = 0; i < result.length; i++)
                    courseDetails.push(result[i]); 
                for(let i = 0; i < courseDetails.length; i++)
                {
                    for(let j = i; j < courseDetails.length; j++)
                    {
                        if(courseDetails[i]['sem'] > courseDetails[j]['sem'])
                        {
                            let k = courseDetails[i];
                            courseDetails[i] = courseDetails[j];
                            courseDetails[j] = k;
                        }
                    }
                }
              }// Push entire result array for each course
            } catch (error) {
              console.error("Error fetching data for course:", course, error);
              // Handle individual course query errors (optional)
            }
          }
          return courseDetails;
        }
        const coursesData = await coursedataFetch(coursesList);
        console.log("hello", coursesData);
        return res.json(coursesData);
      }
    } catch (error) {
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
                const sql = "select * from student where roll = '"+User.user+"' ";
                con.query(sql , async (err,result) => {
                    if(err) return res.json("Error");
                        else
                        {
                        
                            const encryptyedPassword = await bcrypt.hash(password,10);
                            console.log(encryptyedPassword);
                                        //console.log(result);
                                        const sql = "update student set password = '"+encryptyedPassword+"' where roll = '"+User.user+"' ";
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
                                        const sql = "update student set password = '"+encryptyedPassword+"' where roll = '"+user+"' ";
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