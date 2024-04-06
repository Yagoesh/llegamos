const express = require('express');
const calculateRouter = express.Router();

const getUserByCookies = require('../controlers/getUserByCookies.js');
const calculateControler = require('../controlers/calculate/calculateControler.js');
const getCalculatesControler = require('../controlers/calculate/getCalculatesControler.js');
const getCalculateControler = require('../controlers/calculate/getCalculateControler.js');
const getCars = require('../controlers/calculate/getCars.js');
const getModels = require('../controlers/calculate/getModels.js');
const getCities = require('../controlers/calculate/getCities.js');

calculateRouter.get("/cars" , getUserByCookies , getCars)
calculateRouter.get("/models/:brand" , getUserByCookies, getModels)
calculateRouter.get("/cities" , getUserByCookies , getCities)


calculateRouter.get("/:calculateId" , getUserByCookies , getCalculateControler)
calculateRouter.post("/" , getUserByCookies , calculateControler)
calculateRouter.get("/", getUserByCookies , getCalculatesControler)

module.exports = calculateRouter