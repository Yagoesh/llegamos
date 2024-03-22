const HTTPError = require("../models/HTTPErrors")

function errorsControler (error , req , res , next){
  console.log("❌", error.message)
  if(error instanceof HTTPError) {
    return res.status(error.statusCode).send({error:error.message})
  }
  res.status(500).send({error:error.message})
}
export{errorsControler}