const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bearSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    }
}, {
    collection: ["https://unsplash.com/s/photos/bear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"]
});

var Bears = mongoose.model('Bear', bearSchema);
module.exports = Bears;
