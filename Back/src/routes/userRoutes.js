const express = require('express');
const userRouter = express.Router();

const registerControler = require('../controlers/users/registerControler.js');
const verifyRegistration = require('../controlers/users/verifyRegistration.js');
const loginControler = require('../controlers/users/loginControler.js');
const { deleteUserControler } = require('../controlers/users/deleteUserControler.js');


userRouter.post("/register" , registerControler) 
userRouter.get("/register/:regCode" , verifyRegistration)
userRouter.get("/login", loginControler)
userRouter.delete("/delete/:email", deleteUserControler)



module.exports = userRouter