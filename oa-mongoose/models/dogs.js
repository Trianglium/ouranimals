const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ownerSchema = new Schema({
  name: String,
  contact: String,
});

const dogSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    acknowledgements: [ ownerSchema ]
},{
    unsplash: "https://unsplash.com/s/photos/dogs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
});

var Dogs = mongoose.model('Dog', dogSchema);

module.exports = Dogs;
