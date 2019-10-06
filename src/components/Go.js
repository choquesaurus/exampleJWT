import React, { Component } from 'react';
import  config from  '../clases/config';


export default class Go extends Component {
    constructor(){
        super();
        this.state={
            nombre:""
        }
    }
    async stateNombre(e){
        await this.setState({
            [e.target.name]:e.target.value
        });  
    console.log(this.state);

    }
    async ActualizarNombre(){
        
        await fetch("http://localhost:5009/api/updateDatos",{
            method:"PUT",
            body:JSON.stringify(this.state),
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("dato1")}`
                
            }
        }).then(data=>{
            return data.json();
        }).then(data=>{
            M.toast({html:data.message});
            console.log(data);
        }).catch(error=>{
            M.toast({html:error.message});
        })

    }
    // componentDidMount(){
    //     console.log("GAAAAA"+localStorage.getItem("dato1"));
    //     // localStorage.clear();   
    // }
    verLocal(){
       // alert(localStorage.getItem("dato1"));
        
        console.log(localStorage.getItem("dato1"));
        //localStorage.removeItem("dato1");
    }
    render() {
        return (
            
            <div className="contenedor">
                    {
                        console.log(localStorage.getItem("dato1")+" xdd")
                    }
                <div className="centro">
                    <input type="text" name="nombre" placeholder="Ingresa tu nombre" onChange={this.stateNombre.bind(this)}></input>
                    <button className="btn " onClick={this.ActualizarNombre.bind(this)}> Actualizar  nombre</button>
                    <button onClick={this.verLocal}>Yaaa</button>
                </div>
            </div>
        )
    }
}
