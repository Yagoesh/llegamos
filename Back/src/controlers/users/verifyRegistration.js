const sendQuery = require("../../db/initDb")

async function verifyRegistration (req , res , next) {
const regCode = req.params.regCode
const [user] = await sendQuery(`
SELECT * FROM users WHERE 
regCode = ?
` , [regCode])

await sendQuery(`UPDATE users
SET verified = "yes"
WHERE regCode = ?
` , [regCode])

res.send(user)
}

module.exports = verifyRegistration