import React, { useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { 
  setInput, 
  setResponse as setReduxResponse, 
  setLoading as setReduxLoading 
} from '../features/InputSlice';
import { GoogleGenAI } from "@google/genai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { DiSafari } from 'react-icons/di';


function InputBox() {
    const dispatch = useDispatch();
    const [text , setText] =useState("")
    const [loading ,setLoading] = useState(false)


    const API_KEY = "AIzaSyBgMyo_t2xZ5Gn3IysY5M2PXMWgioixCzg"; 

    const fetchResponse = async ()=>{
      if(!text) return;
        setLoading(true)
        dispatch(setReduxLoading(true))
        
      try {
        
        // const genAI = new GoogleGenerativeAI(API_KEY);
        // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        // const result = await model.generateContent(text);
        // const responseText = result.response.text();
        const ai = new GoogleGenAI({ apiKey: API_KEY });
        
                  
              const result = await ai.models.generateContent({
                model: "gemini-2.5-flash", 
                contents: [{ role: "user", parts: [{ text: text }] }],
              });
        
        dispatch(setInput(text))
        dispatch(setReduxResponse(result.text))
      } catch (error) {
        alert(error)
        
        dispatch(setReduxResponse("Error: Failed to fetch response. Check console."))
      }finally{
        setLoading(false)
        dispatch(setReduxLoading(false))
      }
    }
// const fetchResponse = async () => {
//         if (!text) return;
        
//         setLoading(true)
//         dispatch(setReduxLoading(true))

//         try {
//             const genAI = new GoogleGenerativeAI(API_KEY);
            
//             // UPDATE: Changed model to "gemini-1.5-pro"
//             const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
            
//             const result = await model.generateContent(text);
//             const responseText = result.response.text();
            
//             dispatch(setInput(text))
//             dispatch(setReduxResponse(responseText))
            
//         } catch (error) {
//             console.error(error);
//             dispatch(setReduxResponse("Error: Failed to fetch response. Check console."))
//         } finally {
//             setLoading(false)
//             dispatch(setReduxLoading(false))
//         }
//     }

  return (
    <div className='text-white flex flex-col h-30 pb-4 rounded-lg  w-full'>
      <div className='m-auto flex'>
        <span className='m-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'><input type="checkbox" /> Gemini <span className='text-xs text-gray-400'>(Google)</span> </span>
        <span className='m-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'><input type="checkbox" /> ChatGpt <span className='text-xs text-gray-400'>(OpenAi)</span> </span>
        <span className='m-4 border-2 px-3 py-2 rounded-lg border-gray-700 hover:border-blue-500'><input type="checkbox" /> Grok <span className='text-xs text-gray-400'>(XAi)</span></span>
        
      </div>
      <div className='flex m-auto'>
        <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
         className="w-150 p-3 resize-none border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 "
         rows="1"
         placeholder="Enter your description here..."
        ></textarea>
        <button onClick={fetchResponse} className='flex ml-3 gap-1  items-center justify-center border border-gray-100 rounded-lg w-30 hover:border-blue-500 hover:bg-slate-500'><span className='text-blue-500'><FaTelegramPlane/> </span>{loading? "Generating" :  "Generate"  }</button>
      </div>
    </div>
  )
}

export default InputBox