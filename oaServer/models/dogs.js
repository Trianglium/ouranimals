const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
      }
}, {
      collection: ["https://unsplash.com/s/photos/dogs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"]
});

var Dogs = mongoose.model('Dog', dogSchema);
module.exports = Dogs;
