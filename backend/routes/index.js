const express =  require('express');
const router = express.Router();
const { ping, signup, signin, addVehicle, getAllVehiclesOfOwner, getAllVehicles, booking} = require('../api');

router.get('/ping', ping);
router.post('/hirewheels/v1/users', signup);
router.post('/hirewheels/v1/users/access-token', signin);
router.post('/hirewheels/v1/vehicles', addVehicle);
router.get('/hirewheels/v1/vehicles', getAllVehiclesOfOwner);
router.get('/hirewheels/v1/vehicles/all', getAllVehicles);
router.post('/hirewheels/v1/bookings', booking);

module.exports = { router };
