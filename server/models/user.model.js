import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
    friendList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    imageUrl: { type: String }

}, { timestamps: true });


export const User = mongoose.model('User', userSchema);

