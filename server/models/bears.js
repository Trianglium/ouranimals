const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bearSchema = new Schema({
    _id: Number,
    image: {
        type: String,
        required: true,
        unique: true
    }
});

var Bears = mongoose.model('Bear', bearSchema);

module.exports = Bears;
