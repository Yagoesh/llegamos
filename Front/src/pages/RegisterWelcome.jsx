import axios from "axios"
import {NavLink, useParams} from "react-router-dom"

function RegisterWelcome () {
  const {regCode} = useParams()
  console.log(regCode)
  axios.get("http://localhost:3000/user/register/:regCode" )
  .then(data => console.log(data.resp))
  .catch(error => console.log(error.message))

return(
  <>
    <h2>Welcome to Llegamos seguros</h2>
    <p>Your account has been verified successfully </p>
    <NavLink  to={"/login"}>Login</NavLink>

  </>
)  
}
export {RegisterWelcome}