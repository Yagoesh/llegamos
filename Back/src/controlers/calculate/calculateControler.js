const sendQuery = require("../../db/initDb.js")
const calculations = require("../../helpers/calculateInsurance.js")
const crypto = require('crypto');


async function calculateControler (req, res ) {
  const {carId , typeId, city} = req.body
  const userId = req.user.userId
  // conseguir la potencia del coche
  const [hp] = await sendQuery(`
  SELECT max_power_hp FROM cars WHERE carId = ?
  ` , [carId])
  const {max_power_hp} = hp
  // conseguir el cityRiskIndex
  const [cityRisk] = await sendQuery(`
  SELECT cityRiskIndex FROM cities WHERE city = ?
  ` , [city])
  const {cityRiskIndex} = cityRisk
  // conseguir el typeRisk
  const [insuranceTypeRisk] = await sendQuery(`
  SELECT typeRisk FROM insurancetypes WHERE typeId = ?
  ` , [typeId])
  const {typeRisk} = insuranceTypeRisk

  const calculateId = crypto.randomUUID();


const price = calculations(typeRisk , max_power_hp , cityRiskIndex )

await sendQuery(` INSERT INTO calculate (calculateId , userId , carId , typeId , price ) VALUES ( ? , ? , ? , ? , ?)`, [calculateId , userId , carId , typeId , price])


res.status(200).send(JSON.stringify(calculateId))
}
module.exports = calculateControler

