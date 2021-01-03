const vehicleController = require('../controllers/vehicle.controller');

const addVehicle = (req, res) => {
    let receivedData = req.body;
    vehicleController.addVehicleToDB(receivedData)
    .then(vehicleData=>res.status(200).json(vehicleData))
    .catch(err=>{console.log(err)});
}

const getAllVehiclesOfOwner = (req, res)=>{
    let email = req.query.owner;
    vehicleController.getAllVehiclesByEmail(email)
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((err)=>{
        console.log(err);
    });
}


const getAllVehicles = (req, res) =>{
    vehicleController.getAllVehicles()
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch(err=>console.log(err));
}

module.exports = { addVehicle, getAllVehiclesOfOwner, getAllVehicles };