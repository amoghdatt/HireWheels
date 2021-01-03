const express = require('express');
const cors = require('cors');
const app = express();
const { router } = require('./routes');
const { url } = require('./config/db.config');
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
}).then(()=>{
    app.listen(8086 , ()=>{
        console.log('server started on port 8086');
    });
}).catch(err=>{
    console.log('Error connecting to Database');
});

app.use('/', router);


