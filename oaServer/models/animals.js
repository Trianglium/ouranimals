const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bears = require('./bears'),
    Dogs = require('./dogs'),
    Foxes = require('./foxes'),
    Otters = require('./otters');

const animalSchema = new Schema({
  image: {
      type: String,
      required: true,
      unique: true
  }
});

var Animals = mongoose.model('Animal', animalSchema);
module.exports = Animals;
