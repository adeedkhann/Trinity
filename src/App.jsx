import Navbar from './components/Navbar'
import Layout from './components/Layout'
import { useSelector } from 'react-redux'
function App() {
 const theme = useSelector((state)=>state.input.theme)
  
  return (
    <div className={`${theme?"bg-slate-900":"bg-white"} pb-3 h-auto w-screen `}>
    <Navbar/>
    
    <Layout/>
    
    
     
    
    </div>
  )
}

export default App