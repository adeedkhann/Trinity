import React, { useRef, useState }  from 'react'
import { MdContentCopy ,MdCheck } from "react-icons/md";
import { useSelector } from 'react-redux';

function ResponseCard() {

const respo = useSelector((state) => state.input.response)
  const AiInfo = [
    {
    name : "Grok",
    symbol : "G",
    own : "xAI"
    },
    {
    name : "Gemini",
    symbol : "G",
    own : "Google"
    },
    {
    name : "ChatGpt",
    symbol : "C",
    own : "OpenAi"
    }

  ] 

function LilResponse({Ai}){

  const divRef = useRef(null)
  const [copied , setCopied] = useState(false)

  const handleCopy =async ()=>{
    if(divRef.current){
      try {
        const textToCopy = divRef.current.innerText;
        await navigator.clipboard.writeText(textToCopy)
        setCopied(true)
        setTimeout(()=>setCopied(false),2000)
      } catch (error) {
        alert("error in copy fetch again")
        console.log(error)
      }
    }
  }
  return(
    <>
    
        <div className='border mt-15 mx-auto  flex-col bg-slate-800 rounded-2xl  w-90 h-100 flex  '> 
          <div className='flex gap-2  h-15 w-full'>
            <span className='text-green-900 mx-3 text-4xl'>{Ai.symbol}</span>
            <div className='text-white'>
              <strong className='text-xl'>{Ai.name}</strong>
              <div className='text-slate-600'>{Ai.own}</div>
              
            </div>
            
          </div>
          
          <div ref={divRef} className='border-y px-2 text-gray-400 overflow-hidden border-gray-500 h-70'>
            <p>{respo}</p>
          </div>
          <div className='my-5 mx-auto text-gray-600'>
            <button onClick={handleCopy}>{copied ?<MdCheck /> : <MdContentCopy/> }</button>
          </div>
        </div>
      
    </>
  )
}






  return (
    <div className='flex gap-2 bg-black h-screen'>
      {AiInfo.map((ai , index)=>
      (<LilResponse Ai={ai} key={index}/>)

      )}
    </div>
  )
}

export default ResponseCard