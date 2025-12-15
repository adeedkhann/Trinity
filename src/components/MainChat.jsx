import React from 'react'
import History from './History'
function MainChat() {
  return (
    <div className='w-full bg-black  '>
      
      <div className='text-white rounded-lg flex flex-col items-center h-110 justify-center '>
        <h1 className='text-5xl mt-15 mb-5'>Welcome to MultiAi Chat</h1>
        <p className=' text-xl text-gray-500'>Enter a prompt below and get responses from multiple Ai models simultaneouly </p>
          <p className=' text-xl text-gray-500'>compare insights from Grok , ChatGPT and Gemini all in one place.
        </p>
        <div className='flex'>
          <div className=' px-15 py-5 m-9 bg-slate-700 rounded-lg flex flex-col text-xl'><strong>Grok </strong><span className='text-xs text-gray-300 m-auto'>xAi</span></div>
          <div className=' px-15 py-5 m-9 bg-slate-700 rounded-lg flex flex-col text-xl'><strong>ChatGPT</strong> <span className='text-xs text-gray-300 m-auto'>OpenAi</span></div>
          <div className=' px-15 py-5 m-9 bg-slate-700 rounded-lg flex flex-col text-xl'><strong>Gemini</strong> <span className='text-xs text-gray-300 m-auto'>Google</span></div>
        </div>

      </div>
    </div>
  )
}

export default MainChat