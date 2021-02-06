const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const States = require('./model');

// Loads env variables
require('dotenv').config()

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

// Adds json parsing middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

mongoose.connect("mongodb+srv://grotor:V23v10a2004@grotor0.kcsbq.mongodb.net/games?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Setup static directory to serve
app.use(express.static(path.resolve('client', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

router.get('/test', (req, res) => {
    res.json({message: 'Hello, World!'});
});

router.get('/states', (req, res) => {
    States.find((err, states) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: states});
    });
});

router.put('/states/:blockId', (req, res) => {
    const {blockId} = req.params;
    if (!blockId) {
        return res.json({success: false, error: 'No comment id provided'});
    }
    console.log(87);
    console.log(req.body);
    States.find({"block": blockId}, (err, states) => {
        const {rOwner, vOwner} = req.body;
        states[0].resourceOwner = rOwner;
        states[0].voteOwner = vOwner;
        if (err) return res.json({success: false, err});
        states[0].save(err => {
            console.log(states);
            if (err) return res.json({success: false, err});
            return res.json({success: true});
        });
    });
});

app.use('/api', router);

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
