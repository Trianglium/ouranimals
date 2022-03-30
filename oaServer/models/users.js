const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true
    },
    favorites: [],
    {
    timestamps: true
});



var Users = mongoose.model('User', userSchema);
module.exports = Bears;
