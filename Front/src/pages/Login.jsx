import styles from "./register.module.css"

function Login () {
  // inputs email password
  // comprobamos si existe usuario con correo electrionico
  // cmprobamos si la contraseña coincide
  // meter token en Ls
  // navigate a mis seguros o Mis presupuestos 


  return(

    <>
    <h1>Login</h1>

    <input type="text" placeholder="Email..." />

    <input type="password" placeholder="Password..." />
    
    <div className={styles.separador}></div>

    </>
  )
}
export {Login}