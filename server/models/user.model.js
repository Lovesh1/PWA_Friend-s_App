import mongoose from "mongoose"


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
        type: String,
    }

},{timestamps: true});


const User = mongoose.model('User', userSchema);

export default User