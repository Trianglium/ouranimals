const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foxSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
      }
}, {
    collection: ["https://unsplash.com/s/photos/fox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"]
});

var Foxes = mongoose.model('Fox', foxSchema);
module.exports = Foxes;
