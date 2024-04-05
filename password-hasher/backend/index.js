import express from 'express'
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get("/", cors(), (req, res) => {
})

app.post('/', async (req, res) => {
    const {pass} = req.body;   
    console.log("Received request for user:", pass);
    try {
        const encryptyedPassword = await bcrypt.hash(pass,10);
        console.log(encryptyedPassword);
        return res.json(encryptyedPassword)
        }
    catch (error) {
        console.error("Error retrieving student data:", error);
        res.status(500).json("Error");
    }
});
const PORT = 1111;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});