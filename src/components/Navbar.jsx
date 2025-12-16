import { useState } from 'react'
import { FaMoon , FaRegSun ,FaUser } from "react-icons/fa";
import trinity from '../assets/trinity.png'
function Navbar() {

  const [theme , setTheme] = useState(true)
 
  return (
    
      <nav className='text-white h-13  flex justify-between w-screen border border-slate-500'>
        <span className='ml-4 text-blue-400 text-4xl flex'> <span className=' text-white '><img className='w-10 h-10'  src={trinity} alt=''/></span> Trinity</span>
        <ul className='flex mr-10 '>
          <li className='m-3' onClick={()=> theme ? setTheme(false) : setTheme(true)}>{theme? <FaMoon/> :<FaRegSun/>}</li>
          <li className='m-3'><FaUser/></li>
        </ul>
      </nav>
    
  )
}

export default Navbar