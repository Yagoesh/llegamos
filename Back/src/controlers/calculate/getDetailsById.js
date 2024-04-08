const sendQuery = require("../../db/initDb")

async function getDetailsById (req , res) {
  const {carId} = req.params
const details = await sendQuery(`SELECT brand_name , model_name FROM cars WHERE carId = ? `, [carId] )
res.status(200).send(details)
}
module.exports= getDetailsById