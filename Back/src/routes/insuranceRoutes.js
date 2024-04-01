
const express = require('express');
const insuranceRouter = express.Router()

const createInsurance  = require('../controlers/insurance/createInsurance.js');
const getUserByCookies = require('../controlers/getUserByCookies.js');
const getInsurancesControler = require('../controlers/insurance/getInsurancesControler.js');
const deleteInsuranceControler = require('../controlers/insurance/deleteInsuranceControler.js');


insuranceRouter.post("/" , getUserByCookies, createInsurance)
insuranceRouter.get("/" , getUserByCookies , getInsurancesControler)
insuranceRouter.delete("/:insuranceId" , getUserByCookies , deleteInsuranceControler )

module.exports = insuranceRouter