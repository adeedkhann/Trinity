import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import MainChat from './MainChat'
import History from './History'
import InputBox from './InputBox'
function Layout({open , setOpen}) {

    
  return (
    <div className='flex h-full w-full'>
        
          <div className='flex flex-col gap w-full'>
                    <MainChat/>
                    <InputBox/>
          </div>
    </div>
  )
}

export default Layout