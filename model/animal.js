const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalImageSchema = new Schema ({
    type: {
        type:String,
        required:[true, 'Animal Type Required']
    },
    image: {
        type:String,
        required:[true, 'Image Path Required']
    }
});
AnimalImageSchema.methods.findSimilarType = function findSimilarType (cb) {
    return this.model('Animal').find({ type: this.type }, cb);
};

const Animal = mongoose.model('animal', AnimalImageSchema, "animal");

module.exports = Animal;