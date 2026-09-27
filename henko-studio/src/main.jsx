import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HenkoStudio from './HenkoStudio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HenkoStudio />
  </StrictMode>,
)
