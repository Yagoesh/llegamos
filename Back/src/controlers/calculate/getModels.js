const sendQuery = require("../../db/initDb")

async function getModels (req , res) {
  const {brand} = req.params
const models = await sendQuery(`SELECT DISTINCT carId , model_name FROM cars WHERE brand_name = ? `, [brand] )
res.status(200).send(models)
}
module.exports= getModels