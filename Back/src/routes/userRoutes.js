const express = require('express');
const sendQuery = require('../db/initDb.js');
const userSchema  = require('../schemas/userSchema.js');
const userRouter = express.Router();

userRouter.post("/register" , (req,res,next) => {
  // en back ...

const result = userSchema.safeParse(req.body)

  

// DOB
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
const age = calculateAge(req.body.dob)
if (age < 18) {
  return res.send("menor de edad ")
}

res.send(result)

// sendQuery(`
// INSERT INTO users (name , surname , dob , email , mobile , password) VALUES (? , ? ,? ,? , ?)
// `, [name , surname , dob , email , mobile , password ])
  
  
  // si no existe , hacemos un insert ... values
  // mandamos por nodemailer un correo y esperamos la confirmacion
  // una vez hecha la confirmacion se crea el token con : id , name , email , age, sex

  
   })

module.exports = userRouter