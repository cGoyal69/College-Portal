const express = require('express')
const app = express()
app.use(express.json());

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://college:college123@myatlasclusteredu.tchpdvk.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run(user) { 
	let a = "Error";
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		const database = client.db('studentdata');
		const studentdata = database.collection('studentdata');
		const query = { username: user}
		a = await studentdata.findOne(query);
		//console.log(a, "hello")
		// Send a ping to confirm a successful connection
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} finally {
		await client.close();
	}
    return a;
	
}
let studentDataset;
console.log("after Run")
async function hello() {
    studentDataset = await run("vik99290").catch(console.dir);
    console.log(studentDataset);
}
hello();



const PORT = 6969
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});