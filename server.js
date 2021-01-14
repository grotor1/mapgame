const express = require('express');
const path = require('path');
const axios = require('axios');

// Loads env variables
require('dotenv').config()

const app = express();

const  API_PORT = process.env.API_PORT || 3000;

// Adds json parsing middleware
app.use(express.json());

// Setup static directory to serve
app.use(express.static(path.resolve('client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

// console.log that your server is up and running
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
