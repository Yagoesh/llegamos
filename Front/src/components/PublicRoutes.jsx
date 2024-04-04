import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"
import { Navigate, Outlet } from "react-router-dom"

function PublicRoutes () {
  const {user} = useContext(UserContext)
 
  return user ? <Navigate to="/" /> : < Outlet/> 

}
export {PublicRoutes}