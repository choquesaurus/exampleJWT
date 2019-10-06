import  express from 'express';
import  conexion from './dbMongo/connection/connection';
import rutas from  './routes/router';
import cors from 'cors';
//import {pathdefault} from  '../src/configuration';
//import path from 'path';

class  App{
    constructor(){
        this.app=express();
        this.setting();
        this.routes();
    }
    setting(){
        this.app.set("PORT",5009||process.env.PORT);
        
        this.app.use(cors());
        this.app.use(express.json());
        //this.app.use(express.static(path.join(pathdefault,"/public")));
        this.app.use(express.urlencoded({extended:false}));
    }
    routes(){
        this.app.use(rutas);
    }
    start(){
        this.app.listen(this.app.get("PORT"),()=>{
            console.log(`Running Application in http://localhost:${this.app.get("PORT")}`);
        });
    }
}
const  GoApp= new App();
GoApp.start();