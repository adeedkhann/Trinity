import { useSelector } from 'react-redux'
function MainChat() {
  const loading = useSelector((state) => state.input.loading)
  const theme = useSelector((state) => state.input.theme)
  return (
    <div className={`w-full  ${theme? "bg-black ":"bg-white"}`}>
      
      <div className={` ${theme? "text-white ":"text-black"} rounded-lg flex flex-col items-center md:h-105 justify-center `}>
        <h1 className='text-5xl mb-5'>{loading? "analysing your prompt....." : "Welcome to Trinity"}</h1>
        <p className={`text-xl ${theme? "text-gray-500 ":"text-gray-700"} `}>Enter a prompt below and get responses from multiple Ai models simultaneouly </p>
          <p className={`text-xl ${theme? "text-gray-500 ":"text-gray-700"} `}>compare insights from Llama , Gemini and Qwen all in one place.
        </p>
        <div className='flex flex-col md:flex-row'>
          <div className={` px-15 py-5 m-1 ${theme? "bg-slate-700 ":"bg-slate-200"} rounded-lg flex flex-col text-xl`}><strong>Llama </strong><span className={`text-xs ${theme?"text-gray-300":"text-gray-600"} m-auto`}>Meta</span></div>
          <div className={` px-15 py-5 m-1 ${theme? "bg-slate-700 ":"bg-slate-200"} rounded-lg flex flex-col text-xl`}><strong>Gemini</strong> <span className={`text-xs ${theme?"text-gray-300":"text-gray-600"} m-auto`}>Google</span></div>
          <div className={` px-15 py-5 m-1 ${theme? "bg-slate-700 ":"bg-slate-200"} rounded-lg flex flex-col text-xl`}><strong>Qwen</strong> <span className={`text-xs ${theme?"text-gray-300":"text-gray-600"} m-auto`}>AliBaba</span></div>
        </div>

      </div>
    </div>
  )
}

export default MainChat