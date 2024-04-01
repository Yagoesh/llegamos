const sendQuery = require("../../db/initDb.js")
const { dateOneYear, formatearFecha } = require("../../helpers/dateHelpers.js")
const insuranceSchema = require("../../schemas/insuranceSchema.js")


async function createInsurance (req , res , next) {
  const info = req.body

  const validate = insuranceSchema.safeParse(info)
  if(validate.error) {
    return res.send(validate.error.issues)
  }


const expireDate = dateOneYear()
const renovatesAt = formatearFecha(expireDate)

const [calculate] = await sendQuery(`SELECT * FROM calculate WHERE calculateId = ?` , [info.calculateId])

await sendQuery(`
  INSERT INTO insurance ( type , price , userId , calculateId , carId , numberPlate , renovatesAt) VALUES (? , ? , ? , ? , ? , ? , ?)
  `, [calculate.typeId , calculate.price , calculate.userId , calculate.calculateId , calculate.carId , info.numberPlate, renovatesAt])

await sendQuery(`UPDATE calculate SET acceptedCalculate = true WHERE calculateId = ? `,  [calculate.calculateId])
  res.status(200).send("insurance created")
}
module.exports = createInsurance