import React from 'react'
import './Reg.less'
import TextField from '@mui/material/TextField';//获取文本框组件
import regImg from '@/static/images/logo.png'//获取图片
import Button from '@mui/material/Button';//按钮组件
import { useState } from 'react';
import { useDispatch } from 'react-redux';//redux的方法
import {_reg} from '@/request/api'//获取接口链接
export default function Reg() {
  //变量
  const [phone,statePhone] = useState('');
  const [password,statePassword] = useState('');

  //redux方法
  const dispatch = useDispatch();

  //方法
  const phoneChage =function(e:Ietarget){
    statePhone(e.target.value);
  }
  const passwordChage = function(e:Ietarget){
    statePassword(e.target.value);
  }
  //注册方法
  interface Ires{
    errCode:number|undefined,
    message:string,
    data?:Object
  }
  const reging=function(){    
    async function reg():Promise<any>{
      const res = await _reg({
        phone:phone,
        password:password
      })
      return res;
      
    }
    reg().then(res=>{
      if(res.data.errCode=== 0){
        dispatch({
          type:'注册成功',
        });
      }else{
        dispatch({
          type:'信息错误',
        });
      }
    });
  }

  return (
    <div>
      <div className='reg'>
        <div className='reg_tap'>
        </div>
        <div className='reg_img'>
          <img src={regImg} alt="无法显示图片" />
        </div>
        <div className='reg_text'>
          <p>reg Page</p>
        </div>
        <div className='reg_phone reg_padding'>
        <TextField id="outlined-basic" label="手机号" variant="outlined" onChange={phoneChage} value={phone}/>
        </div>
        <div className='reg_paw reg_padding'>
        <TextField id="outlined-basic" label="密码" variant="outlined" onChange={passwordChage} value={password}/>
        </div>
        <div className='reg_btn'>
        </div>
        <div className='reg_btn'>
        <Button variant="contained" onClick={reging}>reg</Button>
        </div>
        <div className='reg_btn2'>
          <span onClick={()=>{window.history.go(-1)}}>返回登录页</span>
        </div>
        
    </div>
    </div>
  )
}
