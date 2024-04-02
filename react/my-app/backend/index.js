import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();
app.set("view engine", 'ejs');

let JWT_SECRET = "hellokigahjdfveqjhggdfiuqehdfouie2h9867d86723t4r23grjhv";
let tok;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const uri = "mongodb+srv://college:college123@myatlasclusteredu.tchpdvk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run(user,pass) { 
    let result = "Error";
    try {
        await client.connect();
        const database = client.db('studentdata');
        const studentdata = database.collection('studentdata');
        const query = { username: user, password: pass };
        result = await studentdata.findOne(query);
        console.log("Pinged your deployment. You connected to MongoDB!", result);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
    return result;
};

async function run2(user,) { 
    let result = "Error";
    try {
        await client.connect();
        const database = client.db('studentdata');
        const studentdata = database.collection('studentdata');
        const query = { username: user };
        result = await studentdata.findOne(query);
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
    return result;
};

async function run3(id,) { 
    let result = "Error";
    try {
        await client.connect();
        const database = client.db('studentdata');
        const studentdata = database.collection('studentdata');
        let s = new ObjectId(id);
        const query = { _id : s };
        result = await studentdata.findOne(query);
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
    return result;
};

async function run4(id, encryptedPassword) {
    let updateResult = "Error"; // Updated to indicate update status by default
    let result = "Error"; 
    try {
      await client.connect();
      const database = client.db('studentdata');
      const studentdata = database.collection('studentdata');
      const convertedId = new ObjectId(id); // Ensure proper conversion to ObjectId
  
      const query = { _id: convertedId };
      const update = { $set: { password: encryptedPassword } }; // More concise update object
  
      updateResult = await studentdata.updateOne(query, update);
      result = await studentdata.findOne(query);
      // Check update result for success
      if (updateResult.modifiedCount !== 1) {
        console.error("Password update failed!");
        updateResult = "Update Failed"; // Provide a more specific error message
      } else {
        console.log("Password successfully updated!");
        updateResult = "Updated"; // Indicate successful update
      }
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      updateResult = "Error"; // Update status in case of errors
    } finally {
      await client.close();
    }
  
    return result;
  }

app.get("/", cors(), (req, res) => {
})

app.post('/login', async (req, res) => {
    const { user, pass } = req.body;
    console.log("Received request for user:", user);
    try {
      // Find the user by username
      const student = await run2(user);
      if (!student) {
        // User not found, return appropriate error
        return res.json("Error");
      }
      // Compare password using bcrypt
      const isMatch = await bcrypt.compare(pass, student.password);
      if (!isMatch) {
        // Password mismatch, return error
        return res.json("Error");
      }
      // User authenticated, generate JWT token
      const token = jwt.sign({ user: student.username }, JWT_SECRET, { expiresIn: "30m" });
      console.log("Login successful, generated token:", token);
      return res.json({ token }); // Send token in the response
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

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
          if (User==="token expired") {
            return res.send({status: "error" , data : "token expired"});
          }
          else
          {
              const student = await run(User.user , User.pass)
              if(student)
              {
                  console.log("Retrieved student data:", student);
                  return res.status(200).json(student);  
              }
              else
              {
                  console.log(student)
                  return res.json("Error");
              }
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

app.post('/forgot-password', async (req,res) =>
{
   const {user} = req.body ;
   console.log("Received request for user:", user);
   try {
    let student = await run2(user);
    console.log(student.Name);
        if(!student)
        {
            return res.send('User Not Exist');   
        }
        else{
        const secret = JWT_SECRET + student.password;
        const token1 = jwt.sign({user: student.username , id: student._id} , secret ,{expiresIn: "10m",});
        const link = `http://localhost:6969/reset-password/${student._id}/${token1}`;
        console.log(link);
        }
    } catch (error) {
    }
});

app.get("/reset-password/:id/:token1", async (req, res) => {
    const { id, token1 } = req.params;
    console.log(req.params);
    const User = await run3(id);
    console.log(User);
    if (!User) {
        return res.status(404).json({ error: "User Doesn't Exist" });
    }
    const secret = JWT_SECRET + User.password;
    try {
        const verify = jwt.verify(token1, secret);
        const isVerified = true; // Replace with your logic to determine verification status
        return res.render('index', { email: 'your_email@example.com', status: isVerified ? 'verified' : 'not_verified' });
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
});

app.post("/reset-password/:id/:token1", async (req,res) => {
    const { id, token1 } = req.params;
    const{ password } = req.body;
    const User = await run3(id);
    console.log(User);
    if(!User){
        return res.json("User Doesn't Exist");
    }
    else{
        const secret = JWT_SECRET + User.password;
        try {
            const verify = jwt.verify(token1,secret);
            const encryptyedPassword = await bcrypt.hash(password,10);
            const change = await run4(id , encryptyedPassword);
            console.log(change);
            if(change){
                return res.json({status: 'Password Updated'});
            }
        } catch (error) {
            res.json({status: "Something Went Wrong"});
        }
    }
});