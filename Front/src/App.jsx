
import './app.css'
import { Payments } from './pages/Payments'
import {Routes , Route} from "react-router-dom"

import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { RegisterWelcome } from './pages/RegisterWelcome'
import { MisSeguros } from './pages/MisSeguros'
import { Headers } from './components/Headers'
import { Calculate } from './pages/Calculate'
import { Perfil } from './pages/Perfil'




function App() {


  return (
    <>
 

     <Headers />
     <Routes>
    
     <Route path="/login" element={< Login/>}/>

    < Route path="/register/registerWelcome" element={< RegisterWelcome />}/>
     <Route path="/register" element={< Register/>}>
     </Route>
      


      <Route path="/misSeguros" element={< MisSeguros/>}/>
      <Route path="/Payments" element={< Payments/>}/>
      <Route path="/calculate" element={< Calculate/>}/>
      <Route path="/perfil" element={< Perfil/>}/>
     </Routes>
  
    </>
  )
}

export default App
