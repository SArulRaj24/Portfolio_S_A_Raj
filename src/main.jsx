import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header.jsx'
import Topcontainer from './Components/Topcontainer/Topcontainer.jsx'
import Skillcontainer from './Components/Skillcontainer/Skillcontainer.jsx'
import Projectcontainer from './Components/Projectcontainer/Projectcontainer.jsx'
import Expcontainer from './Components/Experiencecontainer/Expcontainer.jsx'
import Contact from './Components/Contactcontainer/Contact.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header/>
    <Topcontainer/>
    <Skillcontainer/>
    <Projectcontainer/>
    <Expcontainer/>
    <Contact/>

  </StrictMode>,
)
