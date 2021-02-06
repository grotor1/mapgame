const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const StatesSchema = new Schema({
    sessionId: Number,
    sessionData: [{
        resourceOwner: String,
        voteOwner: String,
        state1: String,
        state2: String,
        block: String,
        task: String,
        resources: String
    }]
}, {timestamps: true});

// export our module to use in server.js
module.exports = mongoose.model('States', StatesSchema)

