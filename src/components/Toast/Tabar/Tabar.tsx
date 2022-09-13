import React from 'react'
import './Tabar.less'
import  {useNavigate}  from 'react-router-dom';
//引入tabar
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
//引入tabar
import { useState } from 'react';

import home1 from '@/static/images/tabbar/home_2.png'
import home2 from '@/static/images/tabbar/home_1.png'
import fast from '@/static/images/tabbar/fast.png'
import my1 from '@/static/images/tabbar/my_2.png'
import my2 from '@/static/images/tabbar/my_1.png'


export default function Tabar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [home,setHome] = useState(home2);
  const [my,setMy] = useState(my1);
  return (
    <div className='tabar'>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {          
          setValue(newValue);
          if(newValue===0){
            setHome(home2);
            setMy(my1);
            navigate('/home')
          }else if(newValue===1){
            setHome(home1);
            setMy(my1);
            navigate('fast');
          }else if(newValue===2){
            setHome(home1);
            setMy(my2);
            navigate('/mine')
          }
        }}
      >
        <BottomNavigationAction label="首页" icon={<img src={home}/>} />
        <BottomNavigationAction label="快速刷题" icon={<img src={fast}/>} />
        <BottomNavigationAction label="我的" icon={<img src={my}/>} />
      </BottomNavigation>
    </div>
  )
}
