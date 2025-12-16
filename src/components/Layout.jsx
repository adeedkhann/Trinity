import MainChat from './MainChat'
import InputBox from './InputBox'
import { useSelector } from 'react-redux'
import ResponseCard from './ResponseCard'

function Layout() {

  const responded = useSelector((state)=> state.input.responded)
  return (
    <div className='flex w-full'>
        
          <div className='flex flex-col gap w-full '>
                    {responded ? <div className=''><ResponseCard/></div> :<MainChat/>}
                    <InputBox/>
          </div>
    </div>
  )
}

export default Layout