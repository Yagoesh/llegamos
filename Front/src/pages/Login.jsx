import styles from "./register.module.css"
import {useForm} from "react-hook-form"
import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"



function Login () {
  const navigate = useNavigate()
  const {register , handleSubmit , formState } = useForm({
    mode:"onTouched"
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [resp, setresp] = useState('')
  
  const {logIn} = useContext(UserContext)
  
  async function onLogin (data, event) {
    event.preventDefault()
    try {
      
      const response  = await axios.post("http://localhost:3000/user/login" , data , {withCredentials:true})

      const token = response.data.token
      const user = response.data.user

  
      logIn(user , token)


      setresp(response)
      navigate("/Calculate")
        
      }
      
      catch(error)  {
        
        if (error.response) {
          
          return setErrorMessage(error.response.data);
        } 
        
        return console.error('Error al enviar la solicitud:', error.message);
     
      }
      
    }
    
    // navigate a mis seguros o Mis presupuestos 
    const {errors } = formState

  return(

  <>
    <h1>Login</h1>

    <form onSubmit={handleSubmit(onLogin)}>
      <div>
        <input name="email"
          {...register ("email",
            {required:"required",
              minLength:{ value:3 , message:"minimum 3 characters"} ,
              maxLength:{value: 100 , message:"maximum 20 characters"}}
          )}
        type="text" placeholder="Email..."
        />
        <p className={styles.erroresFormulario}>{errors.email?.message}</p>
      </div>
      <div>
        <input name="password"
          {...register ("password",
          {required:"required",
          minLength:{ value:3 , message:"Your password must have at least 3 characters"} ,
          maxLength:{value: 10 , message:"Your password must have a maximum of 10 characters"}}
          )}
          type="password" placeholder="Password..."
          />
        <p className={styles.erroresFormulario}>{errors.password?.message}</p>
      </div>
      
      
      <div className={styles.separador}></div>
      <button>Login</button>
    </form>
          {errorMessage && <p>{errorMessage}</p>}



  </>
  )
}
export {Login }