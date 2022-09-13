import {createStore} from 'redux'
const baseState={
    msg:'获取成功',
    toast:{
        information:'',
        display:false,
        type:'success',
    }
}

const reducer = (state=baseState,action:Itype)=>{
    let newstate = JSON.parse(JSON.stringify(state));
    if(action.type === '请求成功'){
        newstate.toast={
            information:'注册成功',
            display:true,
            type:'success'
        }
    }else if(action.type === '信息错误'){
        newstate.toast={
            information:'请输入正确信息',
            display:true,
            type:'error'
        }
    }
    return newstate;
}

const store = createStore(reducer);

export default store;