
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
import UserProvider from './contexts/UserProvider'
import { PrivateRoutes } from './components/PrivateRoutes'
import { PublicRoutes } from './components/PublicRoutes'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'





function App() {


  return (
    <>
<UserProvider >
  <Headers />

  <body>
    <Routes>
      <Route path='/' element={< Home/>}/>
      <Route element={<PublicRoutes/>}>
        <Route path="/login" element={< Login/>}/>
        <Route path="/register" element={< Register/>}>
          <Route path="/register/registerWelcome" element={< RegisterWelcome />}/>
        </Route>
      </Route>
      <Route element={< PrivateRoutes/>} >
        <Route path="/misSeguros" element={< MisSeguros/>}/>
        <Route path="/Payments" element={< Payments/>}/>
        <Route path="/calculate" element={< Calculate/>}/>
        <Route path="/perfil" element={< Perfil/>}/>
      </Route>
    </Routes>
  </body>
  < Footer/>
</UserProvider>

  
    </>
  )
}

export default App
