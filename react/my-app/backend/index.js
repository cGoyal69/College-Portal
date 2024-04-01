import express from 'express'
import { MongoClient } from 'mongodb';
import cors from 'cors';
import jwt from 'jsonwebtoken';


const secretKey = 'json_jwt_secretkey@hellokitty96'

const app = express();

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
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
    return result;
};

app.get("/", cors(), (req, res) => {
})

app.post('/', async (req, res) => {
  const { user, pass } = req.body;
  console.log("Received request for user:", user);
  try {
        let student = await run(user,pass);
        
      if(student)
      {
        jwt.sign({student},secretKey,{expiresIn: '30m'},(err, token) =>
        { 
            let tok = token
            console.log(tok);
            student['token'] = token;
            return res.status(200).json(student);
        })  
        console.log("Retrieved student data:", student);
        
      }
      else
      {
        console.log(student)
        return res.json("Error");
      }
  } catch (error) {
      console.error("Error retrieving student data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

function verifytoken(res,req,next){

}
const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


  