
import { FaMoon , FaRegSun ,FaGithub } from "react-icons/fa";
import trinity from '../assets/trinity.png'
import { useDispatch, useSelector  } from 'react-redux';
import { setTheme as reduxTheme} from '../features/InputSlice';

function Navbar() {


  const theme = useSelector((state)=> state.input.theme)
  const dispatch = useDispatch();
  const handleTheme = ()=>{
    
    dispatch(reduxTheme(!theme))

  }
  return (
    
      <nav className={` h-13 ${theme?"text-white":"bg-white "} flex justify-between w-screen border border-slate-500`}>
        <span className='ml-4 text-blue-400 text-4xl flex'> <span className=' text-white '><img className='w-10 h-10'  src={trinity} alt=''/></span> Trinity</span>
        <ul className='flex mr-10 '>
          <li className='m-3' onClick={handleTheme}>{theme? <FaMoon/> :<FaRegSun/>}</li>
          <li className='m-3'><a href="https://github.com/adeedkhann" target="_blank"><FaGithub/></a></li>
        </ul>
      </nav>
    
  )
}

export default Navbar