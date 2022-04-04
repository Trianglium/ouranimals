const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dogSchema = new Schema({
    _id: Number,
    image: {
        type: String,
        required: true,
        unique: true
    }
});

var Dogs = mongoose.model('Dog', dogSchema);

module.exports = Dogs;
