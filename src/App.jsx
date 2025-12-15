import React, { useState } from 'react'
import History from './components/History'
import Navbar from './components/Navbar'
import InputBox from './components/InputBox'
import MainChat from './components/MainChat'
import Layout from './components/Layout'
import GeminiChat from './components/GeminiChat'
import ResponseCard from './components/ResponseCard'

function App() {
  
  const [open , setOpen] = useState(false)
  return (
    <div className='bg-slate-900  w-screen h-screen'>
    <Navbar/>
    <Layout/>
    <ResponseCard/>
     
    
    </div>
  )
}

export default App