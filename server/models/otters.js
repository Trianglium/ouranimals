const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var otterSchema = new Schema({
    _id: Number,
    image: {
        type: String,
        required: true,
        unique: true
    }
});

var Otters = mongoose.model('Otter', otterSchema);

module.exports = Otters;
