const express = require('express');
const userRouter = express.Router();


userRouter.post("/register" , (req,res,next) => {
  // en back ...
  console.log(req.body)
  res.send(req.body)
  // si no existe , hacemos un insert ... values
  // mandamos por nodemailer un correo y esperamos la confirmacion
  // una vez hecha la confirmacion se crea el token con : id , name , email , age, sex

  
   })

module.exports = userRouter