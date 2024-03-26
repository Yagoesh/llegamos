const express = require('express');
const registerControler = require('../controlers/users/registerControler.js');
const verifyRegistration = require('../controlers/users/verifyRegistration.js');
const userRouter = express.Router();

userRouter.get("/register/:regCode" , verifyRegistration)
userRouter.post("/register" , registerControler)

module.exports = userRouter