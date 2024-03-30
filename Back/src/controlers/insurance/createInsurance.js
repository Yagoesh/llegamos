const sendQuery = require("../../db/initDb.js")
const insuranceSchema = require("../../schemas/insuranceSchema.js")


async function createInsurance (req , res , next) {
  const info = req.body
  const validate = insuranceSchema.safeParse(info)
  if(validate.error) {
    return res.send(validate.error.issues)
  }

await sendQuery(`
  INSERT INTO insurance ( type , price , userId , carId , numberPlate) VALUES (? , ? , ? , ? , ?)
  `, [info.type , info.price , req.user.userId , info.carId , info.numberPlate])

  res.send(req.user)
}
module.exports = {createInsurance}