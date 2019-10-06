import  mongoose from 'mongoose';
import  configuration from  '../configuration/configuration';
mongoose.connect(configuration.url,{useNewUrlParser:true,useUnifiedTopology:true}
).then(db => console.log('db mongo is connected')).catch(error => console.log(`Error encontrado : ${error}`))