import styles from "./styles.module.css"
import {NavLink} from "react-router-dom"

function Headers () {
  return <>
  <header className={styles.header}>
    <div className={styles.titles}>

      <h2 className={styles.title2}>Seguros</h2>
      <h1 className={styles.title1}>
        
        LLEGAMOS</h1>
      <img className={styles.icono} src="./paracaidas.png" alt="" />
    </div>

    <div className={styles.buttons}>
      <NavLink  to={"/"}  >HOME</NavLink>
      <NavLink  to={"/register"}>Register</NavLink>
      <NavLink  to={"/login"}>Login</NavLink>
      <NavLink  to={"/misSeguros"}>Mis Seguros</NavLink>
      <NavLink to={"/payments"}>Payments</NavLink>
      <NavLink  to={"/calculate"}>Calculate</NavLink>
      <NavLink  to={"/perfil"}>Perfil</NavLink>
    </div>
  </header>
  </>
}
export {Headers}