const express = require('express');
const calculateRouter = express.Router();

const getUserByCookies = require('../controlers/getUserByCookies.js');
const calculateControler = require('../controlers/calculate/calculateControler.js');
const getCalculatesControler = require('../controlers/calculate/getCalculatesControler.js');
const getCalculateControler = require('../controlers/calculate/getCalculateControler.js');
const getCars = require('../controlers/calculate/getCars.js');
const getModels = require('../controlers/calculate/getModels.js');

calculateRouter.get("/cars" , getUserByCookies , getCars)
calculateRouter.get("/models" , getUserByCookies, getModels)


calculateRouter.get("/:calculateId" , getUserByCookies , getCalculateControler)
calculateRouter.post("/" , getUserByCookies , calculateControler)
calculateRouter.get("/", getUserByCookies , getCalculatesControler)

module.exports = calculateRouter