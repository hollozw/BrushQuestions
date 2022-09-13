interface Idata{
  msg:string,
  toast:Toast
}
type Toast={
  information:string,
  display:boolean,
  type:'success' | 'info' | 'warning' | 'error',
}

interface Itype{
  type:string
}