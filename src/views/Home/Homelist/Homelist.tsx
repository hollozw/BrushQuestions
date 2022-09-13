import React from 'react'
import './Homelist.less'
import imgs from '@/static/images/home/subject.png'
import { useState,useEffect } from 'react';
//进度条
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { type } from 'os';
//进度条结束

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}




export default function Homelist(props:Iprops) {
  
  const data:TexemItems =  props.msg;
  
  const [progress, setProgress] = React.useState(20);

  React.useEffect(() => {    
    //逻辑公式
    let fz = data.itemCount;
    let fm = data.itemCount;
    let zhong:number = Number(fz) / Number(fm) *100;
    setProgress(zhong);
  }, []);




  return (
    <div className='c_flex'>
        <img className='c_div_img' src={imgs} alt="" />
        <div className='c_div_text'>
            <p className='c_div_p1'>{data.title}</p>
            <p className='c_div_p2'>{data.itemCount}/{data.itemCount}题</p>
            <div><LinearProgressWithLabel value={progress} /></div>
        </div>
        <div  className='c_div_btn'>练习</div>
    </div>
  )
}
