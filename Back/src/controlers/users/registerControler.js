const sendQuery = require('../../db/initDb.js');
const userSchema  = require('../../schemas/userSchema.js');
const {formatearFecha , calculateAge } = require('../../helpers/dobHelpers.js');
const sendEmail = require('../../helpers/sendEmail.js');
const bcrypt = require("bcrypt")

async function registerControler (req,res,next) {
  // en back ...

const result = userSchema.safeParse(req.body)
if (!result.data) {
  return res.status(500).send("no se ha completado el body")
}

// creamos un regCode 

const regCode = crypto.randomUUID()

// password
const saltRounds = 10
const hashedPassword = await bcrypt.hash(result.data.password , saltRounds)

// DOB

const age = calculateAge(req.body.dob)
if (age < 18) {
  return res.send("menor de edad ")
}
const fechaFormateada = formatearFecha(result.data.dob)

// comprobar si existe el usuario ya

const [user] = await  sendQuery(`SELECT * FROM users WHERE email = ?` , [result.data.email])


if(user){
  return res.status(500).send("ya existe el usuario")
}
// si no existe , hacemos un insert ... values
await sendQuery(`
INSERT INTO users ( name , surname, dob, email, mobile, password, regCode)
VALUES ( ?, ?, ?, ?, ?, ? , ? )
`, [result.data.name, result.data.surname, fechaFormateada, result.data.email, result.data.mobile, hashedPassword , regCode]);

// mandamos por nodemailer el regCode y esperamos la confirmacion
await sendEmail(result.data.email , "Verifica para registrarte" , `
<h1>Bienvenidos a Seguros Llegamos</h1> 
<p>gracias por registrarte, para verificar solo falta un ultimo paso haz click en el siguiente <a href="http://localhost:3000/user/register/:${regCode}">link</a></p>
`)
res.send("registered")
}

module.exports = registerControler