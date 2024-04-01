const sendQuery = require("../../db/initDb.js")

async function getCalculatesControler (req , res) {
const userId = req.user.userId
const calculates = await sendQuery(` SELECT * FROM calculate WHERE userId = ?`, [userId])
if(!calculates) {
  return res.send("this user has made no calculations yet")
}
res.status(200).send(calculates)
}

module.exports = getCalculatesControler