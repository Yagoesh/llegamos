import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoutes () {
  const {user} = useContext(UserContext)
  return user ? < Outlet/> : <Navigate to="/Login" />

}
export {PrivateRoutes}