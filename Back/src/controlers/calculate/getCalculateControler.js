const sendQuery = require("../../db/initDb.js")

async function getCalculateControler (req , res) {
const {calculateId} = req.params

const calculates = await sendQuery(` SELECT * FROM calculate WHERE calculateId = ?`, [calculateId])
if(!calculates) {
  return res.send("this calculation doesnt exist")
}
res.status(200).send(calculates)
}

module.exports = getCalculateControler