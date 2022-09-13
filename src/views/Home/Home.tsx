import React, { useState } from 'react'
import './Home.less'
import imgs from '@/static/images/home/xiaolang.png'//img信息
//三图片标签
import imgBar1 from '@/static/images/home/examination.png'
import imgBar2 from '@/static/images/home/books.png'
import imgBar3 from '@/static/images/home/practice.png'
//三图片标签

import { _fist } from '@/request/api'

import Homelist from './Homelist/Homelist'//引入子组件

export default function Home() {
  const [exam,setExam]:any = useState({});
  const [exemItems,setExemItems]:any = useState([]);
  const [collect,setCollect]:any = useState();
  const [wrong,setWrong]:any = useState();
  const [study,setStudy]:any = useState();
  React.useEffect(()=>{
    let token = localStorage.getItem('token')
    
    async function ayfist(){
      const res = await _fist({
        headers:{
          'x-auth-token':token
        }
      })
      
      let exam = res.data.data.exam;
      let exemItems = res.data.data.exemItems;
      let collect = res.data.data.collect;
      let wrong = res.data.data.wrong;
      let study = res.data.data.study;
      setExemItems(exemItems);
      setExam(exam);
      setCollect(collect);
      setWrong(wrong);
      setStudy(study);
      
    }

    ayfist();
  },[])
  
  return (
    <div>
      <div className='home'>
        {/* 头部信息 */}
        <div className='home_top'>
          <p className='home_top_p1'>Java学科</p>
          <div className='home_top_p2'>切换考试科目 <span></span></div>
        </div>
        {/* 头部信息结束 */}

        {/* img信息 */}
        <div className='home_img'>
          <div className='home_img_left'>
            <p className='img_left_text'>欢迎Tomato来到xx学习库</p>
            <img className='img_left_img' src={imgs} alt="" />
          </div>
          <div className='home_img_right'>
            <div className='img_right_top'>
              <p className='right_top_p2'>共{exam.itemCount}题</p>
              <span></span>
              <p className='right_top_p1'>已学{study}题</p>
            </div>
            <div className='img_right_bottom'>
              <div className='margin-box2'>
                <p className='bottom_box_p1'>{collect}</p>
                <p className='bottom_box_p2'>收藏</p>
              </div>
              <div >
                <p className='bottom_box_p1'>{wrong}</p>
                <p className='bottom_box_p2'>错题</p>
              </div>
              
            </div>
          </div>
        </div>
        {/* img信息结束 */}

        {/* 三图片标签 */}
        <div className='img_bar'>
          <img className='margin_img1' src={imgBar1} alt="" />
          <img  src={imgBar2} alt="" />
          <img className='margin_img2' src={imgBar3} alt="" />
        </div>
        {/* 三图片标签结束 */}
        
        
        {/* 学科题库 */}
        <div className='subject_topic'>
          <p className='subject_topic_p1'>学科题库</p>
          <p className='subject_topic_p2'>坚持每一天，成长看得见</p>
        </div>
        {/* 学科题库结束 */}

        {/* 进度条 */}
        <div className='progress_bar'>
          {
            exemItems.map((item:TexemItems,index:number) => {
              return (
                <div className='progress_bar_list' key={index}><Homelist msg={item}></Homelist></div>
              )
            })
          }
        </div>


        {/* 进度条结束 */}



      </div>
    </div>
  )
}
