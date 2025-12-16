import { FaRegClock } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import HistoryItem from './HistoryItem';

function History() {
  return (
    <div className={`border relative rounded-lg border-slate-500 h-screen ${open ? "w-80 display-none" :"w-0"}`}>
        <h1 className='text-white  text-3xl flex p-2 m-2'><span className='p-1'>< FaRegClock/></span><strong> Chat History</strong></h1>
        <div className='flex relative'><span className=' relative left-5 top-3 text-gray-500'><IoSearchSharp/></span><input className="pl-6 pt-2 pb-3 text-white w-70 rounded-lg bg-slate-800" type="text" placeholder='Search Prompts... ' /></div>
        <div><HistoryItem/></div>

    </div>
  )
}

export default History