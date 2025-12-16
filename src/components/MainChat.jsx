import { useSelector } from 'react-redux'
function MainChat() {
  const loading = useSelector((state) => state.input.loading)
  return (
    <div className='w-full  bg-black  '>
      
      <div className='text-white rounded-lg flex flex-col items-center md:h-105 justify-center '>
        <h1 className='text-5xl mb-5'>{loading? "analysing your sussy baka prompt....." : "Welcome to Trinity"}</h1>
        <p className=' text-xl text-gray-500'>Enter a prompt below and get responses from multiple Ai models simultaneouly </p>
          <p className=' text-xl text-gray-500'>compare insights from Llama , Gemini and Qwen all in one place.
        </p>
        <div className='flex flex-col md:flex-row'>
          <div className=' px-15 py-5 m-1 bg-slate-700 rounded-lg flex flex-col text-xl'><strong>Llama </strong><span className='text-xs text-gray-300 m-auto'>Meta</span></div>
          <div className=' px-15 py-5 m-1 bg-slate-700 rounded-lg flex flex-col text-xl'><strong>Gemini</strong> <span className='text-xs text-gray-300 m-auto'>Google</span></div>
          <div className=' px-15 py-5 m-1 bg-slate-700 rounded-lg flex flex-col text-xl'><strong>Qwen</strong> <span className='text-xs text-gray-300 m-auto'>AliBaba</span></div>
        </div>

      </div>
    </div>
  )
}

export default MainChat