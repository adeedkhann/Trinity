import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
function InputBox() {
  return (
    <div className='text-white flex flex-col pb-4 rounded-lg border border-gray-500 w-screen'>
      <div className='m-auto flex'>
        <span className='m-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'><input type="checkbox" /> Gemini <span className='text-xs text-gray-400'>(Google)</span> </span>
        <span className='m-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'><input type="checkbox" /> ChatGpt <span className='text-xs text-gray-400'>(OpenAi)</span> </span>
        <span className='m-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'><input type="checkbox" /> Grok <span className='text-xs text-gray-400'>(XAi)</span></span>
        
      </div>
      <div className='flex m-auto'>
        <textarea
         className="w-150 p-3 resize-none border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 "
         rows="1"
         placeholder="Enter your description here..."
        ></textarea>
        <button className='flex ml-3 gap-1  items-center justify-center border border-gray-100 rounded-lg w-30 hover:border-blue-500 hover:bg-slate-500'><span className='text-blue-500'><FaTelegramPlane/> </span> Generate</button>
      </div>
    </div>
  )
}

export default InputBox