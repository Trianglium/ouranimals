const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bearSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    owner: [creditSchema]
});

var Bears = mongoose.model('Bear', bearSchema);
module.exports = Bears;
