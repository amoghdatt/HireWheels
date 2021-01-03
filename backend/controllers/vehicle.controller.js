const { vehicleModel } = require('../models');

function getAllVehicles(){
    return vehicleModel.find({}).exec();
}

function getAllVehiclesByEmail(email){
    return vehicleModel.find({owner:email}).exec();
}

function addVehicleToDB(vehicleDetails){
    let newVehicle = new vehicleModel({...vehicleDetails});
    return newVehicle.save();
}

module.exports = {getAllVehicles, addVehicleToDB, getAllVehiclesByEmail};