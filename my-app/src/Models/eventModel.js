const mongoose = require('mongoose');

//product schema containing name and quantity as variables
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

//exporting the schema
module.exports = mongoose.model('Event', eventSchema);