import React, { Component } from 'react'
import  {Redirect} from 'react-router-dom';
import  Go from './Go';
import  config from  '../clases/config';
export default class userlogin extends Component {
    
    constructor(){
        super();
        
        this.state={
            usuario:"",
            contraseña:"",
            redirect:false,
            token:""
        }
    }
     
    async CaptureData(e){

        await this.setState({
            [e.target.name]:e.target.value
        });
      //  console.log(this.state);
    }

   async IniciarSesion(){
    await localStorage.removeItem("dato1");
    await localStorage.clear();    
    await fetch("http://localhost:5009/Go",{
        method:"POST",
        body:JSON.stringify(this.state),        
        headers:{
                    "Content-Type":"application/json"
                },
         }).then(data => {
             return  data.json();
         }).then(data => {
           //let  msj=data.status=="oks"?"":"";
            if(data.status=="oks"){
                this.setState({
                    redirect:true,
                    token:data.token
                });
                
                localStorage.setItem("dato1",data.token);
                
                //const  obj=new config();
                //config.setToken(data.token);
                //console.log(data.token);
                //<Go nombres={"daniel"}></Go>
                //window.location.href="https://www.youtube.com/watch?v=XRfD8xIOroA"; 
                //<Redirect from="/" to="/regs"></Redirect>
                //M.toast({html:data.status})
                //console.log("ready");
            }
            else{
                M.toast({html:data.status});
                //console.log("cancel");
            }
        })
    }
    renderRedirect(){
        if(this.state.redirect==true){
            return <Redirect  to="/Principal"></Redirect>
             }  
    }
    render() {
        return (
            
            <div className="contenedor"> 
                    {
                    this.renderRedirect()
                    }
                <div className="centro">
                 <table>
                     <tbody>
                    <tr>
                        <td>
                            <label>Ingresar usuarios</label>
                        </td>
                        <td>   
                            <input type="text" name="usuario" onChange={this.CaptureData.bind(this)} placeholder="Ingresa tu usuario"></input>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label>Ingresar tu contraseña</label>
                        </td>
                        <td>   
                        <input type="password" name="contraseña" onChange={this.CaptureData.bind(this)} placeholder="Ingresa tu contraseña"></input>
                        </td>

                    </tr>
                        <tr>
                            <td>
                            <button className="btn" onClick={this.IniciarSesion.bind(this)}>Iniciar Sesion Go</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
