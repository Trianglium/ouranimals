const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otterSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    }
}, {
    collection: ["https://unsplash.com/s/photos/otter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"]
});

var Otters = mongoose.model('Otter', otterSchema);
module.exports = Otters;
