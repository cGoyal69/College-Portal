const mongoose = require('mongoose');
const loginDetailsSchema = new mongoose.Schema(
    {
        username: {type: String,unique: true},
        password: {type: String,unique: true},
        Allergies: {type:String},
        "Alternative Contact Number": {type:String},
        "Blood Group": {type:String},
        Branch: {type:String},
        City:{type:String},
        Contact:{type:String},
        "Contact Number":{type:String},
        Domicile:{type:String},
        "Father Name":{type:String},
        Hostel:{type:String},
        "Mother Name":{type:String},
        Name:{type:String},
        "Permanent Address":{type:String},
        "Physical Disablities":{type:String},
        "Room Numnber":{type:String},
        Semester:{type:String},
        State:{type:String},
        "Year of Graduation":{type:String},
        "Registration Number":{type:String},
    },
    {
        collection: "LoginInfo",
    }
);
mongoose.model("LoginInfo",loginDetailsSchema);
