const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING).then(() =>{
    console.log("Connected to database")
}).catch((err) => {console.log(err)}) 



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.PORT}`);
});