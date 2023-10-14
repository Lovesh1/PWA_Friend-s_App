const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true,
    },
    FriendID: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
       
    },
    photo: {
        type: URL,
        required: true
    }

},{timestamps: true});


const User = mongoose.model('User', userSchema);

module.exports = User;