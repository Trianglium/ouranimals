const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var creditSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

var bearSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    owner: [creditSchema]
});

var dogSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    owner: [creditSchema]
});

var foxSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    owner: [creditSchema]
});

var otterSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },

    owner: [creditSchema]
});

const animalSchema = new Schema({
  bears: [bearSchema],
  dogs: [dogSchema],
  foxes: [foxSchema],
  otters: [otterSchema],
  credits: [creditSchema]
});

var Animals = mongoose.model('Animal', animalSchema);
module.exports = Animals;
