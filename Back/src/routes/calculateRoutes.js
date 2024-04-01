const express = require('express');
const calculateRouter = express.Router();

const getUserByCookies = require('../controlers/getUserByCookies.js');
const calculateControler = require('../controlers/calculate/calculateControler.js');
const getCalculatesControler = require('../controlers/calculate/getCalculatesControler.js');


calculateRouter.post("/" , getUserByCookies , calculateControler)
calculateRouter.get("/", getUserByCookies , getCalculatesControler)
module.exports = calculateRouter