import {Router} from  'express';
//import  control from  '../controllers/controller';
import  jwt from 'jsonwebtoken';
import  {secretKeyExample} from '../dbMongo/configuration/configuration';
import EsquemaPost from '../dbMongo/model/modelcreateuser';
//import { nextTick } from 'q';
//import {Redirect} from  'react-router-dom';
const  rutas=Router();
/*
import React from 'react'
import { Redirect } from 'react-router-dom'
const ProtectedComponent =() => {
if (authFails)
    return <Redirect to='/login' />
}
return <div> My Protected Component </div> 
} 
*/
rutas.post("/register",async(req,resp)=>{
    const {nombre,usuario,contraseña}=req.body;
    const user={nombre,usuario,contraseña};
    //console.log(req.body);
    const  createUser= await new EsquemaPost(user);
    try {
        await createUser.save();    
        resp.send({message:"Usuario creado"});
    } catch (error) {
        resp.send({error:error.message});
    };   
    //const  token=jwt.sign({payload},secretKeyExample);
    //console.log(secretKeyExample);
    //resp.send({token});
});
rutas.post("/Go",async (req,resp)=>{
   try {
    const  data=await EsquemaPost.find({usuario:req.body.usuario,contraseña:req.body.contraseña});
    //const  [{contraseña}]=await EsquemaPost.find({contraseña:req.body.contraseña});
    const [{usuario,contraseña}]=data;
    //console.log(usuario,contraseña);        
    if( usuario===req.body.usuario && contraseña===req.body.contraseña ){
        const  token=jwt.sign(req.body,secretKeyExample,{expiresIn:"3m"});
        resp.send({status:"oks",token});
    }      
   } catch (error) {
    resp.send({status:"Usuario Incorrecto"});
   }
});
rutas.put("/api/updateDatos",ValidationToken,async(req,resp)=>{

      jwt.verify(req.tokenn,secretKeyExample,async(error,data)=>{
        if(error){
            resp.send({
                message:"TokenIncorrecto"
            });
        }
        else{
            const {nombre:nameuser}=req.body;
            const {usuario:user,contraseña:pass}=data;
           await EsquemaPost.update({usuario:user,contraseña:pass},{nombre:nameuser});
            resp.send({message:"user Update",data});
    
        }        
    });

});
 function ValidationToken(req,resp,next){
    let  auth=req.headers["authorization"];
    console.log(auth);
    //console.log(typeof  token);
    if(typeof auth != 'undefined'){
        auth=auth.replace("Bearer ","");
        //const arraytoken=auth.split(" ");
        //const  token=arraytoken[1];
        req.tokenn=auth;
        next();
        console.log(`token obtenido xd  : ${auth}`);
    }
    else{
        resp.sendStatus(403);
    }
};
module.exports=rutas;