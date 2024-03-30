const sendQuery = require("../../db/initDb")

async function deleteUserControler (req , res , next) {
  const {email} = req.params
  console.log(email)
await sendQuery(`
DELETE FROM users
WHERE email = ?
`, [email])
res.status(200).send("user deleted")
}
module.exports = {deleteUserControler}