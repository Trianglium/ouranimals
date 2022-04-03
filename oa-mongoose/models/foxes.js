const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ownerSchema = new Schema({
  name: String,
  contact: String,
});

const foxSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    acknowledgements: [ ownerSchema ]
},{
    unsplash: "https://unsplash.com/s/photos/fox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
});

var Foxes = mongoose.model('Fox', foxSchema);

module.exports = Foxes;