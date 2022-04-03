const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var unsplashSchema = new Schema({
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
    }
});


const imageSchema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    animal: {
      type: String
    },
    acknowledgements: {
      type: ObjectId,
      ref: 'owner',
      autopopulate: { select: 'name' }
    }
},{
    timestamps: true
});

imageSchema.plugin(autopopulate);

module.exports = imageSchema;
