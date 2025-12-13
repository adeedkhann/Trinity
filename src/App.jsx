import React, { useState } from 'react'
import History from './components/History'
import Navbar from './components/Navbar'
import InputBox from './components/InputBox'
import MainChat from './components/MainChat'
import Layout from './components/Layout'

function App() {
  const [open , setOpen] = useState(true)
  return (
    <div className='bg-slate-900  w-screen'>
     <Navbar/>
     <History open={open} setOpen={setOpen}/>
     <MainChat/>

     
    
    </div>
  )
}

export default App