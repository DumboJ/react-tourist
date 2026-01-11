import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// @ts-ignore
import App_without_state from './App_without_state.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App_without_state />
  </StrictMode>,
)
