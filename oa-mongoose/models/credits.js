const mongoose = require('mongoose');
const Schema = mongoose.Schema,
    model = mongoose.model;

var websiteSchema = new Schema({
    link:  {
        type: String,
        required: true
    }
}, {
    site: "Unsplash"
});

const ownerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    collections: [ websiteSchema ]
});

const Owners = mongoose.model('Owner', ownerSchema);

module.exports = Owners;
