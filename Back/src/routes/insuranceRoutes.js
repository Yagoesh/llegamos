
const express = require('express');
const insuranceRouter = express.Router()

const { createInsurance } = require('../controlers/insurance/createInsurance.js');
const getUserByCookies = require('../controlers/getUserByCoockies.js');


insuranceRouter.post("/" , getUserByCookies, createInsurance)

module.exports = insuranceRouter