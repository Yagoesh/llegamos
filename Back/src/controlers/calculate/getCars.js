const sendQuery = require("../../db/initDb")

async function getCars (req , res) {
const brands = await sendQuery(`SELECT DISTINCT brand_name FROM cars ` )
res.status(200).send(brands)
}
module.exports= getCars