require('dotenv').config();
import  mongoose from 'mongoose';
//import  configuration from  '../configuration/configuration';
mongoose.connect(process.env.url,{useNewUrlParser:true,useUnifiedTopology:true}
).then(db => console.log('db mongo is connected')).catch(error => console.log(`Error encontrado : ${error}`))