import express from 'express'
import User from '../models/user.model.js'

  const Login = async (req,res) => {
    const {ID, FriendID, password} = req.body
    const newUser = new User({ID, FriendID, password})
    try{
        await newUser.save();
        res.status(201).json('User Created Successfully')
        
    }catch(err){
       res.json(err)
    }
}

export default Login

