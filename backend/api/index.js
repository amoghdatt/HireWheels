const { ping } = require('./misc');
const { signup , signin} = require('./auth');
const { addVehicle, getAllVehiclesOfOwner, getAllVehicles } = require('./vehicle');
const { booking } = require('./booking');
module.exports = {ping, signup, signin, addVehicle, getAllVehiclesOfOwner, getAllVehicles, booking};