import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import useRouter from './routes/user.router.js'
dotenv.config()
const app = express();
app.use(express.json());

app.use("/", useRouter)


mongoose.connect(process.env.CONNECTION_STRING, { dbName: "PWA_Text" }).then(() => {
    console.log("Connected to database")
}).catch((err) => { console.log(err) })

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port:${process.env.PORT}`);
});
