import { StrictMode } from 'react'//componente de react, ayuda a identificar problemas en la app
import { createRoot } from 'react-dom/client'//punto de entrada principal para renderizar UI
import './index.css'
import App from './App.jsx'// componente raiz de la aplicacion

createRoot(document.getElementById('root')).render(//metodo que selecciona el contenedor principal
  <StrictMode>
    <App/>
  </StrictMode>,
)
