
const sendQuery = require("../../db/initDb")

async function deleteInsuranceControler (req , res , next) {

  const insuranceId = req.params.insuranceId
  // comprobar si existe tal seguro
  const [selectedInsurance] = await sendQuery(`SELECT * FROM insurance WHERE insuranceId = ?` , [insuranceId])
  if(!selectedInsurance) {
    return res.send("this insurance is not in the DDBB")
  }
  // comprobar si ese seguro es del usuario que está logeado
  if(req.user.userID !== selectedInsurance.userID) {
    res.send("the request of delete an insurance should be made by its user")
  }
  // delete 
  await sendQuery(`DELETE FROM insurance WHERE insuranceId = ?`, [insuranceId])

  

  res.status(200).send("insurance deleted")
}
module.exports = deleteInsuranceControler