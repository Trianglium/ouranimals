const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otterSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true
});

var Otters = mongoose.model('Otter', otterSchema);

module.exports = Otters;
