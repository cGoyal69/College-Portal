const express = require('express')
const app = express()
app.use(express.json());
const mongoose = require("mongoose");
const { userInfo } = require('os');

const mongoUrl ="mongodb+srv://college:college123@myatlasclusteredu.tchpdvk.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU";
mongoose
.connect(mongoUrl,{
})
.then(()=>{
  console.log("connected to database");
})
.catch((e) =>console.log(e));

require('./logindetails')
const user = mongoose.model('LoginInfo')
app.post("/", async(req, res) => {
  const {username} = req.body
  await user.findOne({username});
try{
  if(username === user.username){
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


const PORT = 6969
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});