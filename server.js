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

const  API_PORT = process.env.API_PORT || 3000;

// Adds json parsing middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

mongoose.connect("mongodb+srv://grotor:V23v10a2004@grotor0.kcsbq.mongodb.net/m?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Setup static directory to serve
app.use(express.static(path.resolve('client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

router.get('/test', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

router.get('/', (req, res) => {
    States.find((err, states) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: states });
    });
});

app.use('/api', router);

// console.log that your server is up and running
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
