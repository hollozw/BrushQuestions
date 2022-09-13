import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tabar from './components/Toast/Tabar/Tabar';



//所有登入后的页面都要在该页面中访问
export default function App() {
  const data = useSelector((state:Idata)=>{
    return state;
  })
  
  //导航栏
  
  return (
    <div>
      
      
      <Outlet></Outlet>
      <div style={{height:'50px',width:'100%'}}></div>

      <Tabar></Tabar>
    </div>
  )
}


