const bookingController = require('../controllers/booking.controller');

function booking(req, res){

    bookingController.writeToDB(req.body)
    .then((bookingDetails)=>{
        res.status(200).json(bookingDetails);
    })
    .catch(err=>console.log(err));

}

module.exports = {booking};