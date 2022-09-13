import React from 'react'

import "./Login.less"//获取样式

import TextField from '@mui/material/TextField';//获取文本框组件

import Button from '@mui/material/Button';//按钮组件

import {useDispatch,useSelector} from 'react-redux'//获取redux

import loginImg from '@/static/images/logo.png'//获取图片

import { useState } from 'react';//双向绑定

import {_login} from '@/request/api'//注册功能

import { Navigate, useNavigate } from 'react-router-dom';//路由跳转navigat

export default function Login() {
  const data = useSelector((state:Idata)=>state);//获取redux的state

  const dispatch = useDispatch();//获取redux的action

  const navigate = useNavigate();//获取路由跳转
  //变量
  const [phone,statePhone] = useState('');
  const [password,statePassword] = useState('');

  //变量函数
  
  

  const phoneChage =function(e:Ietarget){
    statePhone(e.target.value);
  }
  const passwordChage = function(e:Ietarget){
    statePassword(e.target.value);
  }

  //注册按钮
  const logining = ()=>{
    
    _login({
      username:'18934430110',
      password:'wolfcode123',
    }).then(res=>{
      if(res.data.errCode===0){
        localStorage.setItem('token',res.data.data);
        navigate('/Home',{
          state:{
          }
        })
      }
      

    }).catch(err=>{
      console.log(err,'请求失败');
    })
  }

  //跳转注册
  const gotoReg = function(){
    navigate('/Reg');
    
  }


  return (
    <div className='login'>
        <div className='login_tap'>
          
        </div>
        <div className='login_img'>
          <img src={loginImg} alt="无法显示图片" />
        </div>
        <div className='login_text'>
          <p>Login Page</p>
        </div>
        <div className='login_phone login_padding'>
        <TextField id="outlined-basic" label="手机号" variant="outlined" onChange={phoneChage} value={phone}/>
        </div>
        <div className='login_paw login_padding'>
        <TextField id="outlined-basic" label="密码" variant="outlined" onChange={passwordChage} value={password}/>
        </div>
        <div className='login_btn'>
        <Button variant="contained" onClick={logining}>Login</Button>
        </div>
        <div className='login_btn2'>
          <span onClick={gotoReg}>前往注册</span>
          <span>返回首页</span>
        </div>
    </div>
  )
}
