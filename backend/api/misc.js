async function ping(req, res){
    res.status(200).json({pong:true});
};

module.exports = {ping};