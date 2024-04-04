const sendQuery = require("../../db/initDb")

async function getModels (req , res) {
  const {brand} = req.body
const models = await sendQuery(`SELECT DISTINCT model_name FROM cars WHERE brand_name = ? `, [brand] )
res.status(200).send(models)
}
module.exports= getModels