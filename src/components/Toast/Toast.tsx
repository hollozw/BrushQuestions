import React from 'react'

import './Toast.less'//less样式

import { useSelector } from 'react-redux';

import Alert from '@mui/material/Alert';//弹窗框组件
export default function Toast() {
  const data=useSelector((state:Idata)=>state);

  return (
    <div style={{display:data.toast.display?'block':'none'}}>
      <Alert severity={data.toast.type}>{data.toast.information}</Alert>
    </div>
  )
}
