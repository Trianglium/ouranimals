const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ownerSchema = new Schema({
  _id: Number,
  name: String,
  contact: String,
});

const bearSchema = new Schema({
    _id: Number,
    image: {
        type: String,
        required: true,
        unique: true
    },
    acknowledgements: [ ownerSchema ]
},{
    unsplash: "https://unsplash.com/s/photos/bear?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
});

var Bears = mongoose.model('Bear', bearSchema);

module.exports = Bears;
