const { userModel } = require('../models');

async function findByEmail(email){
    try{
        let userEmail =  await userModel.find({email:email}).exec();
        return userEmail
    } catch(err){
        return 
    }
}

function findByMobileNumber(mobileNumber){
    return userModel.find({mobileNumber:mobileNumber}).exec();
}

function writeToDB(userDetails){
    let newUser = new userModel(userDetails);
    return newUser.save()
}

module.exports = { findByEmail, findByMobileNumber, writeToDB}