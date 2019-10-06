import React from 'react';
//import logo from './logo.svg';



import Layaout from './components/layaout';
import Usercreate from './components/usercreate';
import Login from './components/userlogin';
import Error404 from './components/Error404';
import Go from  './components/Go';
import  {BrowserRouter,Route,Switch} from 'react-router-dom';

import './css/style.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js';
//<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
function App() {
  return (    
    
    <BrowserRouter>
      <Layaout>
        <Switch>
          <Route exact path="/"  component={Login}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/regs" component={Usercreate}></Route>
          <Route exact path="/Principal" component={Go}></Route>
          <Route component={Error404}></Route>
        </Switch>

      </Layaout>
   
    </BrowserRouter>
  );
}

export default App;
