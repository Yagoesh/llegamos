const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")

const sendQuery = require("../../db/initDb");
const { SECRET } = require("../../../env");


async function loginControler (req , res , next) {

  const {email, password} = req.body
  
  if(!email || !password) {
    return res.status(500).send("missing email and/or password")
  }
  
  const [user] = await sendQuery(`
    SELECT * FROM users WHERE email = ?
    `, [email])

  // comprobar que el verified = "yes"

  const [verified] = await sendQuery(`
    SELECT verified FROM users WHERE email = ?
    `, [email])
  
  if (verified.verified === "no") {
  return res.send("you have to verify your account first")
  }

  // comprobamos si existe usuario con correo electrionico
if(!user) {
  return res.status(500).send("no user is registered with this email")
}

// cmprobamos si la contraseña coincide

const passwordMatched = await bcrypt.compare( password , user.password )
if(!passwordMatched) {
  return res.status(401).send("pasword or email dont match")
}
// crear token
const infoUser = {
  name: user.name,
  surname: user.surname,
  email: user.email
}
console.log(SECRET)
const token = jwt.sign(infoUser, SECRET)
const coockieConfig = {
  maxAge: 172800000 , 
  httpOnly: true
}
res.cookie("token" , token , coockieConfig )
res.send("user logged-in")


}
module.exports = loginControler