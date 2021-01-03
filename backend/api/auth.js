const userController = require('../controllers/user.controller');
const jsonwebtoken = require('jsonwebtoken');

async function signup(req, res){

    let emailResults = undefined;
    let mobileResults = undefined;
    try{
        emailResults = await userController.findByMobileNumber(req.body.mobileNumber)
        mobileResults = await userController.findByEmail(req.body.email)
    }catch(err){
        console.log(err);
    }

    if (emailResults.length > 0 || mobileResults.length> 0){
        res.status(409).json({"message":"user already exists"})
    }else{
        userController.writeToDB({...req.body,admin:false})
        .then(jsonBody=>res.status(200).json(jsonBody))
        .catch(err=>res.json(err));
    }
    
}

async function signin(req, res){
    let {email, password} = req.body;

    try{
        results = await userController.findByEmail(email);
    }catch(err){
        console.log(err);
    }

    if(results.length < 0){ 
        res.status(400).send({"message":"email or password doesn't match. Try Again"})
    }else{
        let jwt = jsonwebtoken.sign(req.body, 'abcdefgh', {expiresIn:60});
        res.status(200).json({...results[0]._doc,token:jwt});
    }
}

module.exports = { signup, signin };