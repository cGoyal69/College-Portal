import express from 'express'
import { MongoClient } from 'mongodb';
import cors from 'cors';
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
      const student = await run(user,pass);
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
  } catch (error) {
      console.error("Error retrieving student data:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
