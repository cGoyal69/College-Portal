
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
		console.log(a)
		// Send a ping to confirm a successful connection
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} finally {
		await client.close();
	}
	return a;
}

const studentDataset = run().catch(console.dir);
export {studentDataset};
