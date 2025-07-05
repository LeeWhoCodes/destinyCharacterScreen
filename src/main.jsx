import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Grid from './Grid.jsx'
import Header from './Header.jsx'
import WeaponInfo from './WeaponInfo.jsx'

createRoot(document.getElementById('root')).render(
      <div className='h-screen w-screen overflow-hidden'>
        <Header />
        <Grid />
      </div>
)
