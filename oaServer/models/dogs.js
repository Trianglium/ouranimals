const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    owner: [creditSchema]
});

var Dogs = mongoose.model('Dog', dogSchema);
module.exports = Dogs;
