import styles from "./register.module.css"
import {useForm} from "react-hook-form"


function Register() {
  // aqui ...
  // inputs de name, surname, email , tel-numb , age , sex , password , repeat 
  const {register , handleSubmit , formState, watch} = useForm({
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



  function onSubmit (data) {
    console.log(data)
    console.log(data.dob)

    // hacer un fetch/axios y ver si la promesava bien 
    // vaciar los inputs
  }
  const {errors } = formState




  // page de estamos esperando a que des click al link en tu correo
  // finalmente mensaje de Bienvenid@
  // navigate a Login
  
  
  // en back ...
  // si no existe , hacemos un insert ... values
  // mandamos por nodemailer un correo y esperamos la confirmacion
  // una vez hecha la confirmacion se crea el token con : id , name , email , age, sex

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

      <div>
        Date of birth: 
        <input type="date" name="dob" defaultValue="" max={getCurrentDate()} {...register("dob" , {
          required: 'date of birth required',
          validate: value => isDateValid(value) || 'Underage not allowed'
        })} />
        <p className={styles.erroresFormulario}>{errors.dob?.message}</p>
      </div>

      <div className={styles.separador}></div>

      <div>
        <input name="email"
        {...register ("email",
        {required:"required",
        minLength:{ value:3 , message:"minimum 3 characters"} ,
        maxLength:{value: 20 , message:"maximum 20 characters"}}
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
    </>
  )
}
export {Register}