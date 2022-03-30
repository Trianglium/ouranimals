const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    image_id: {
        type: String,
        required: true
    },
    credit: {
        type: String,
        required: true
    }
});

var Animals = mongoose.model('Animal', animalSchema);
module.exports = Animals;
