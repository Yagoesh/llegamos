
import './app.css'
import { Headers } from './components/Headers'
import { MisSeguros } from './pages/MisSeguros'
import { Payments } from './pages/Payments'
import { Calculate } from './pages/Calculate'
import { Perfil } from './pages/Perfil'
import {Routes , Route} from "react-router-dom"
import { Register } from './pages/Register'
import { Login } from './pages/Login'

function App() {


  return (
    <>
     <Headers />
     <Routes>
    
     <Route path="/login" element={< Login/>}/>
     <Route path="/register" element={< Register/>}/>
      <Route path="/misSeguros" element={< MisSeguros/>}/>
      <Route path="/Payments" element={< Payments/>}/>
      <Route path="/calculate" element={< Calculate/>}/>
      <Route path="/perfil" element={< Perfil/>}/>
     </Routes>
    </>
  )
}

export default App
