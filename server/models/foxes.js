const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var foxSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    }
});

var Foxes = mongoose.model('Fox', foxSchema);

module.exports = Foxes;
