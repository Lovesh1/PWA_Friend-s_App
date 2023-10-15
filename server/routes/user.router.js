import express from 'express'
import { SignUp, GetUsers, friendRequest } from '../controller/auth.control.js'


const router = express.Router()

router.get("/getUsers", GetUsers)
router.post('/signUp', SignUp)
router.post("/:myID/sendRequest/", friendRequest)
export default router