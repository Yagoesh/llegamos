const express = require('express');
const registerControler = require('../controlers/users/registerControler.js');
const verifyRegistration = require('../controlers/users/verifyRegistration.js');
const loginControler = require('../controlers/users/loginControler.js');
const userRouter = express.Router();

userRouter.post("/register" , registerControler) 
userRouter.get("/register/:regCode" , verifyRegistration)
userRouter.get("/login", loginControler)

module.exports = userRouter