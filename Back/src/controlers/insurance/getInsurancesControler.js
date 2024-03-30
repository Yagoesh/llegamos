const sendQuery = require("../../db/initDb.js")

async function getInsurancesControler (req , res , next) {
const [insurances] = await sendQuery(`SELECT * FROM insurance WHERE userId = ?  ` , [req.user.userId])
if(!insurances) {
  return res.send("you dont have any insurances yet")
}
  res.send(insurances)
}
module.exports= getInsurancesControler