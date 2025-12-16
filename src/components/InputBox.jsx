import { useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { 
  setInput, 
  setResponseGem as setReduxResponseGem,
  setResponseGroq as setReduxResponseGroq,
  setResponseHug as setReduxResponseHug,
  setResponded as setReduxResponded,
  setLoading as setReduxLoading ,
} from '../features/InputSlice';
import { GoogleGenAI } from "@google/genai";
import Groq from 'groq-sdk';
import { InferenceClient } from '@huggingface/inference';






const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEM_API_KEY , dangerouslyAllowBrowser : true });
const groq = new Groq({apiKey : import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser : true })
const hug = new InferenceClient(import.meta.env.VITE_HUG_API_KEY);


function InputBox() {
    const dispatch = useDispatch();
    const [text , setText] =useState("")
    const [loading ,setLoading] = useState(false)

    const fetchResponse = async ()=>{ 
      if(!text || loading) return;
        setLoading(true)
        dispatch(setReduxLoading(true))
      try {
          const result =  ai.models.generateContent({
          model: "gemini-2.5-flash", 
          contents: [{ role: "user", parts: [{ text: `answer in only 250 words " ${text}` }] }],
          });
              
          const hugPro = hug.chatCompletion({
          model : "Qwen/Qwen2.5-72B-Instruct",
          messages : [{role : "user" , content :`answer in only 250 words " ${text}`}],
          max_tokens :500,
          });
          const completion =  groq.chat.completions.create({
          messages : [{role : "user" , content : `answer in only 250 words "${text}`}],
          model : "llama-3.1-8b-instant",
          })
        const [gemRes, hugRes, groqRes] = await Promise.allSettled([result, hugPro, completion]);
        if(gemRes.status === "fulfilled"){
           const responseText = gemRes.value.response ? gemRes.value.response.text() : gemRes.value.text; 
            dispatch(setReduxResponseGem(responseText));
        }else{
          console.error(gemRes.reason)
          dispatch(setReduxResponseGem("failed to fetch gemini"))
        }
        if(hugRes.status === "fulfilled"){
          dispatch(setReduxResponseHug(hugRes.value.choices[0]?.message?.content || ""))
        }else{
          console.error(hugRes.reason)
          dispatch(setReduxResponseHug("failed to fetch Qwen"))
        }
        if(groqRes.status === "fulfilled"){
          dispatch(setReduxResponseGroq(groqRes.value.choices[0]?.message?.content || ""))
        }else{
          console.error(groqRes.reason)
          dispatch(setReduxResponseGroq("failed to fetch Llama"))
        }
        
        
        dispatch(setInput(text))
       
      } catch (error) {
        alert(error)
        
        dispatch(setReduxResponseGem("Error: Failed to fetch response. Check console."))
      }finally{
        setLoading(false)
        dispatch(setReduxResponded(true))
        dispatch(setReduxLoading(false))
        setText("")
      }
    }


  return (
    <div className='text-white flex flex-col h-30 rounded-lg md:w-screen w-full'>
      <div className='m-auto flex'>
        <span className='ml-1 md:mx-4 my-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'> Llama <span className='text-xs text-gray-400'>(Meta)</span></span>
        <span className='ml-1 md:mx-4 my-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'> Gemini <span className='text-xs text-gray-400'>(Google)</span> </span>
        <span className='ml-1 my-4 md:mx-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'> Qwen <span className='text-xs text-gray-400'>(AliBaba)</span> </span>
        
        
      </div>
      <div className='flex mx-auto'>
        <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
         className="w-60 md:w-150 p-3 resize-none border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 "
         rows="1"
         placeholder="Enter your description here..."
        ></textarea>
        <button disabled={loading} onClick={fetchResponse} className='flex ml-3 gap-1  items-center justify-center border border-gray-100 rounded-lg p-1 hover:border-blue-500 hover:bg-slate-500'><span className='text-blue-500'><FaTelegramPlane/> </span>{loading? "Generating" :  "Generate"  }</button>
      </div>
    </div>
  )
}

export default InputBox