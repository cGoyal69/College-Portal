const mongoose = require('mongoose');
const loginDetailsSchema = new mongoose.Schema(
    {
        username: {type: String,unique: true},
        password: {type: String,unique: true}
    },
    {
        collection: "LoginInfo",
    }
);
mongoose.model("LoginInfo",loginDetailsSchema);