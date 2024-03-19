const express = require('express')
const app = express()
app.use(express.json());
const momgoose = require("mongoose");



app.post("/", async(req, res) => {
  console.log(req.body);
  const {data} = req.body;

try{
  if(data == "HKD"){
   res.send({status:"ok"}) 
  }
  else{
    res.send({status:"User Not Found"})
  }
}
catch(error){
  res.send({status:"error"})
}
});



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});