const jwt = require("jsonwebtoken")
const { SECRET } = require("../../env")

function getUserByCookies (req , res , next) {

  let {token} = req.cookies
  if(!token) {
    const {authorization} = req.headers
    if(!authorization){
      throw new HTTPError(401 , "need to be logged in for this request")
    }
    token = authorization.split(" ")[1]
  }
  const user = jwt.verify(token , SECRET)
 
  if(!user) {
    return res.status(500).send("need to be logged in for this request")
  }
 
  req.user = user
  next()
}
module.exports= getUserByCookies