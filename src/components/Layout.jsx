import React from 'react'

import Navbar from './Navbar'
import MainChat from './MainChat'
import History from './History'
import InputBox from './InputBox'
import { useSelector } from 'react-redux'
import ResponseCard from './ResponseCard'

function Layout() {

  const responded = useSelector((state)=> state.input.responded)
  return (
    <div className='flex w-full'>
        
          <div className='flex flex-col gap w-full '>
                    {responded ? <ResponseCard/> :<MainChat/>}
                    <InputBox/>
          </div>
    </div>
  )
}

export default Layout