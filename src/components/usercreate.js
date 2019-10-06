import React, { Component } from 'react';
//import { Mongoose } from 'mongoose';
//import Materialize from 'materialize-css';
//import {Toast} from 'materialize-css';
//import 'materialize-css/dist/css/materialize.min.css'

//import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js';
//<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

//import  'materialize-css/dist/css/materialize.min.css';

export default class usercreate extends Component {
    constructor(){
        super();
        this.state={
            nombre:"",
            usuario:"",
            contraseña:""
        };
    }
    async GoSetState(e){
        await this.setState({
            [e.target.name]:e.target.value
        });
        console.log(this.state); 
    }
    async CreateAccount(){
       
        await fetch("http://localhost:5009/register",{
        method:"POST",
        body:JSON.stringify(this.state),        
        headers:{
                    "Content-Type":"application/json"
                },
         }).then(data=>{
            return data.json();
            //  M.toast({html:data});
                       // M.toast({html:data});
         }).then(data=>{
            M.toast({html:data.message});
         }).catch(err=>{
             M.toast({html:err.error});
         })
        // console.log(""+this.state.nombre);
              
    }
   mensaje(){
      // Materialize.Sidenav.init("gaaaa");
 //   Materialize.toast('I am Toast',3000);   

    M.toast({html:"xddd"});
    //alert("asdasdasd");
}
    render() {
        return (
            <div className="contenedor">
                <div className="centro">
                <table>
                    <tbody>
                    <tr> 
                        <td>
                            <label className="azul">Ingresar tu nombre</label>
                        </td>
                        <td>   
                            <input type="text" placeholder="Ingresa tu nombre" name="nombre" onChange={this.GoSetState.bind(this)}></input>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label>Ingresar tu usuario</label>
                        </td>
                        <td>   
                            <input type="text" placeholder="Ingresa tu usuario" name="usuario" onChange={this.GoSetState.bind(this)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Ingresar tu contraseña</label>
                        </td>
                        <td>   
                            <input type="text" placeholder="Ingresa tu contraseña" name="contraseña" onChange={this.GoSetState.bind(this)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td><button className="btn" onClick={this.CreateAccount.bind(this)}>Registrarr</button></td>
                        <td><button onClick={this.mensaje} className="btn">Gaaa</button></td>
                        
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}