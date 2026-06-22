import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App ,{Counter} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Tharun" age="21"/>
    <Counter/>
  </StrictMode>,
)
