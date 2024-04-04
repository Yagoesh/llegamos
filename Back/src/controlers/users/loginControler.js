const bcrypt = require("bcrypt");
const jwt =require("jsonwebtoken")

const sendQuery = require("../../db/initDb");
const  {SECRET } = require("../../../env");


async function loginControler (req , res , next) {

  const {email, password} = req.body
  
  if(!email || !password) {
    return res.status(500).send("missing email and/or password")
  }

  
  const [user] = await sendQuery(`
    SELECT * FROM users WHERE email = ?
    `, [email])

 // comprobamos si existe usuario con correo electrionico
 
 if(!user) {
      return res.status(500).send("no user is registered with this email")
    }
    
    // comprobar que el verified = "yes"
  const [verified] = await sendQuery(`
    SELECT verified FROM users WHERE email = ?
    `, [email])
  
  if (verified?.verified === "no" || verified?.verified === undefined) {
  return res.status(403).send("you have to verify your account first")
  }

// cmprobamos si la contraseña coincide

const passwordMatched = await bcrypt.compare( password , user.password )
if(!passwordMatched) {
  return res.status(401).send("pasword or email dont match")
}
// crear token
const infoUser = {
  userId: user.userId,
  name: user.name,
  surname: user.surname,
  email: user.email
}

const token = jwt.sign(infoUser, SECRET)

const coockieConfig = {
  maxAge: 172800000 , 
  httpOnly: true
}
res.cookie("token" , token , coockieConfig )
res.send({
  message : `user ${user.name} is logged in`,
  user:user,
  token : token
})


}
module.exports = loginControler