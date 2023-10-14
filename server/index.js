import express from'express'
const app = express();
import dotenv from'dotenv'
dotenv.config()
import mongoose from "mongoose"
app.use(express.json());
import useRouter from './routes/user.router.js'

console.log(process.env.CONNECTION_STRING)
mongoose.connect(process.env.CONNECTION_STRING).then(() =>{
    console.log("Connected to database")
}).catch((err) => {console.log(err)}) 

app.use("/server/route", useRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.PORT}`);
});


app.use((err, req, res) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal service error";
 
   return res.status(statusCode).json({
         success: false,
         statusCode,
         message,
    })
 })