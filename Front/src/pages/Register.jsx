import styles from "./register.module.css"
import {useForm} from "react-hook-form"
import axios from "axios"
import { convertDOB } from "../helper/dobHelper";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";


function Register() {
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')
  const [resp, setresp] = useState('')
  // aqui ...
  // inputs de name, surname, email , tel-numb , age , sex , password , repeat 
  const {register , handleSubmit , formState, watch, reset } = useForm({
    mode:"onTouched"
  })

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    // Formatear el día y mes con ceros al principio si son menores que 10
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
  
    return `${day}-${month}-${year}`;
  }
  
  function isDateValid(date) {
    const today = new Date();
    const selectedDate = new Date(date);
    const diff = today.getTime() - selectedDate.getTime();
    const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); 
    
  return age >= 18;
}



async function onSubmit (data, event ) {
  event.preventDefault()
  try {
    const {name , surname , DOB , email , mobile , password} = data
  
  const dob = convertDOB(DOB)
  
  const dataToSend = {name , surname , dob , email , mobile , password}
 
  const response = axios.post("http://localhost:3000/user/register" , dataToSend )

      setresp(response)
    console.log(response)
  
      navigate("/register/registerWelcome")
    
  }
  catch(error) {
    if (error.response) {
      return setErrorMessage(error.response.data);
    }
    return console.error('Error al enviar la solicitud:', error.message);
  }

  reset()

  }
  
  const {errors } = formState

  return(
    <>
    <h1>Register</h1>
    <form onSubmit={handleSubmit(onSubmit)}>


      <div>
        <input name="name"
          {...register ("name" ,
          {required:"required",
          minLength:{ value:3 , message:"minimum 3 characters"} ,
          maxLength:{value: 20 , message:"maximum 20 characters"}}
          )}
          type="text" placeholder="Name..."
        />
        <p className={styles.erroresFormulario}>{errors.name?.message}</p>
      </div>
        
      <div>
        <input name="surname"
        {...register ("surname",
        {required:"required",
        minLength:{ value:3 , message:"minimum 3 characters"} ,
        maxLength:{value: 20 , message:"maximum 20 characters"}}
        )}
        type="text" placeholder="Surname..."
        />
        <p className={styles.erroresFormulario}>{errors.surname?.message}</p>
      </div>

      <div className={styles.dob}>
        Date of birth:
        <input type="date" name="DOB" defaultValue="" max={getCurrentDate()} {...register("DOB" , {
          required: 'date of birth required',
          validate: value => isDateValid(value) || 'Underage not allowed'
        })} />
        <p className={styles.erroresFormulario}>{errors.DOB?.message}</p>
      </div>


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
        <input name="mobile"
        {...register ("mobile",
        {required:"required",
        minLength:{ value:3 , message:"minimum 3 characters"} ,
        maxLength:{value: 10 , message:"maximum 10 characters"}}
        )}
        
        type="tel" placeholder="Mobile Nº ..."
        />
        <p className={styles.erroresFormulario}>{errors.mobile?.message}</p>
      </div>
 
      <div className={styles.separador}></div>

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


      <div>
        <input name="repeatPasword"
        {...register ("repeatPassword",
        {validate: value => value === watch('password') || 'Passwords do not match' }
        )}
        type="password" placeholder="Repeat Password"
        />
            <p className={styles.erroresFormulario}>{errors.repeatPassword?.message}</p>
      </div>


      <div className={styles.separador}></div>

      <button>Register</button>
    </form>

    {errorMessage && <p>{errorMessage}</p>}

    {resp && < Outlet/>}

 

 
    </>
  )
}
export {Register}