const { bookingModel } = require('../models/');

function writeToDB(bookingDetails){
    let newBooking = new bookingModel(bookingDetails);
    return newBooking.save()
}

module.exports = {writeToDB};