const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foxSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    owner: [creditSchema]
});

var Foxes = mongoose.model('Fox', foxSchema);
module.exports = Foxes;
