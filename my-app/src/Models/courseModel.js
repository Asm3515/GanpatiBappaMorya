const mongoose = require('mongoose');

//product schema containing name and quantity as variables
const courseSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    user_registered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},{
    timestamps: true
});

//exporting the schema
module.exports = mongoose.model('Course', courseSchema);