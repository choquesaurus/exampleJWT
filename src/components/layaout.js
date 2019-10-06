import React  from 'react';
import {Link} from 'react-router-dom';
import Nav from './nav';
 const  Layaout =(props)=>{

    return( 
        <React.Fragment>
            <Nav/>
            
            <Link to="/login">Login</Link><br/>
            <Link to="/regs">Crear Usuarios</Link>
            {props.children}
        </React.Fragment>
    );
}
export default Layaout;