const mongoose = require('mongoose');
const {userSchema, vehicleSchema, bookingSchema} = require('../schemas');

let userModel = mongoose.model("users",userSchema);
let vehicleModel = mongoose.model("vehicles",vehicleSchema);
let bookingModel = mongoose.model('bookings',bookingSchema);

module.exports = {userModel, vehicleModel, bookingModel};