const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalImageSchema = new Schema ({
    animal: {
        type:String,
        required:[true, 'Animal Species Required']
    },
    image: {
        type:String,
        required:[true, 'Image Path Required']
    }
});

const Animal = mongoose.model('animal', AnimalImageSchema, "animal");

module.exports = Animal;