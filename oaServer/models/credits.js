const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creditSchema = new Schema({
    owner_id: {
      type: number,
      required: true,
      unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
    social: {
      type: String,
      required: true
    }
    images: []
});

var Credits = mongoose.model('Credit', creditSchema);
module.exports = Credits;
