import { useContext } from "react"
import styles from "./styles.module.css"
import {NavLink} from "react-router-dom"
import { UserContext } from "../contexts/UserProvider"



function Headers () {
  const {user , logOut} = useContext(UserContext)
  return <>
  <header className={styles.header}>
    <div className={styles.titles}>

      <h2 className={styles.title2}>Seguros</h2>
      <h1 className={styles.title1}>
        
        LLEGAMOS</h1>
      {user && <span className={styles.userNameHeader} > {user.name} </span>}
      <img className={styles.icono} src="./paracaidas.png" alt="" />
    </div>

    <div className={styles.buttons}>
      <NavLink  to={"/"}  >HOME</NavLink>
      {
        user && <>
        <NavLink  to={"/misSeguros"}>Mis Seguros</NavLink>
        <NavLink to={"/payments"}>Payments</NavLink>
        <NavLink  to={"/calculate"}>Calculate</NavLink>
        <NavLink  to={"/perfil"}>Perfil</NavLink>
        </>
      }
      {
        !user && <>
        <NavLink  to={"/register"}>Register</NavLink>
        <NavLink  to={"/login"}>LogIn</NavLink>
        </>
      }
      {
        user && <button onClick={logOut}>LogOut</button>
      }

 
    </div>
  </header>
  </>
}
export {Headers}