import instance from './request'
//登录
export const _login = (params:Ilogin) =>instance.post('/1024/login',params);

//注册
export const _reg = (params:Ireg) =>instance.post('/1024/register',params);

//首页
export const _fist = (params={}):Promise<Iresdata> =>instance.get('/6666',params);




