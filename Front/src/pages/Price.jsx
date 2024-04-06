import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"

function Price () {
const {budged} = useContext(UserContext)
console.log(budged)
  return(
    <>
    <h2>Price</h2>

    </>
  )
}
export {Price}