const mongoose = require('mongoose');

let vehicleSchema = mongoose.Schema({
    "model":String,
    "owner":String,
    "number":String,
    "type":String,
    "category":String,
    "colour":String,
    "location":String,
    "image":String,
    "price":Number,
    "fuelType":String

});

vehicleSchema.method("toJson", function(){
    const {__v, _id, ...object} = this.object();
    object.id = _id;
    return object;
});

module.exports = vehicleSchema;