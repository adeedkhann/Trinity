import { useRef, useState }  from 'react'
import { MdContentCopy ,MdCheck } from "react-icons/md";
import { useSelector } from 'react-redux';
import GemSym from '../assets/GemSym.png';
import llamaSym from '../assets/LlamaSym.png';
import QwenSym from '../assets/QwenSym.png';
function ResponseCard() {

const responseGem = useSelector((state) => state.input.responseGem)
const responseGroq = useSelector((state)=> state.input.responseGroq)
const responseHug = useSelector((state) => state.input.responseHug)
  const AiInfo = [
    {
    name : "Llama",
    symbol : llamaSym,
    own : "Groq/Meta",
    respon :responseGroq
    },
    {
    name : "Gemini",
    symbol : GemSym,
    own : "Google",
    respon : responseGem
    },
    {
    name : "Qwen",
    symbol : QwenSym,
    own : "AliBaba",
    respon : responseHug,
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
        alert("error in copy , fetch again")
        console.log(error)
      }
    }
  }
  return(
    <div className=''>
    
        <div className='border mt-15  mx-auto flex-col bg-slate-800 rounded-2xl md:h-120 md:w-100  flex '> 
          <div className='flex gap-2 items-center mx-auto h-15 w-full'>
            <span className='text-green-900 mx-3 text-4xl'><img src={Ai.symbol} className='w-10 h-10' alt="" /></span>
            <div className='text-white'>
              <strong className='text-xl'>{Ai.name}</strong>
              <div className='text-slate-600'>{Ai.own}</div>
              
            </div>
            
          </div>
          
          <div ref={divRef} className='border-y px-2 text-gray-200 h-full text-sm overflow-hidden border-gray-500 '>
            <p>{Ai.respon}</p>
          </div>
          <div className='my-5 mx-auto text-gray-600'>
            <button onClick={handleCopy}>{copied ?<MdCheck /> : <MdContentCopy/> }</button>
          </div>
        </div>
      
    </div>
  )
}






  return (
    <div className='flex gap-3 justify-center bg-black md:h-150 md:flex-row flex-col '>
      {AiInfo.map((ai , index)=>
      (<LilResponse Ai={ai} key={index}/>)

      )}
    </div>
  )
}

export default ResponseCard