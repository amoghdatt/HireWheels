const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    "firstName":String,
    "lastName":String,
    "password":String,
    "email":String,
    "mobileNumber":Number,
    "admin":Boolean
})

userSchema.method("toJson", function(){
    const {__v, _id, ...object} = this.object();
    object.id = _id;
    return object;
});




module.exports = userSchema;