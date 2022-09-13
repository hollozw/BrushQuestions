interface Ilogin{
    nickName?:string,
    username:string,
    password:string
}

interface Ireg{
    nickName?:string,
    phone:string,
    password:string,
}

//首页内容
interface Iresdata{
    data:Tresdata
  }

type Tdata={
    collect:string,
    wrong:string,
    study:string,
    exam:Texam,
    exemItems:TexemItems
  }

  type Texam={
    itemCount:string,
    title:string,
    info:string,
    actionCode:string
  }

  type TexemItems={
    itemCount:string,
    id:string,
    title:string,
    actionCode:string,
    msg?:Object
  }
  
  type Tresdata={
    data:Tdata
  }


  interface Iprops{
    msg:TexemItems,
  }
//首页内容
