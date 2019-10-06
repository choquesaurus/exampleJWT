const controller=()=>{

const  Peticion=(req,resp)=>{
    resp.send({message:"GoMen"});
}
return {
    Peticion
}

}
export  default controller;