const express = require('express');
const calculateRouter = express.Router();

const getUserByCookies = require('../controlers/getUserByCookies.js');
const calculateControler = require('../controlers/calculate/calculateControler.js');
const getCalculatesControler = require('../controlers/calculate/getCalculatesControler.js');
const getCalculateControler = require('../controlers/calculate/getCalculateControler.js');


calculateRouter.get("/:calculateId" , getUserByCookies , getCalculateControler)
calculateRouter.post("/" , getUserByCookies , calculateControler)
calculateRouter.get("/", getUserByCookies , getCalculatesControler)
module.exports = calculateRouter