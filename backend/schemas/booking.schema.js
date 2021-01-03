const mongoose = require('mongoose');

let bookingSchema = mongoose.Schema({
    "pickUp":Date,
    "dropOff":Date,
    "bookingDate":Date,
    "amount":Number,
    "location":String,
    "vehicleNumber":String,
    "customerEmail":String
});

bookingSchema.method("toJson", function(){
    const {__v, _id, ...object} = this.object();
    object.id = _id;
    return object;
});

module.exports = {bookingSchema};