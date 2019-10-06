import  mongoose,{Schema} from 'mongoose';

const  EsquemaPost=new Schema({
    nombre:{type:String,required:true},
    usuario:{type:String,required:true},
    contraseña:{type:String,required:true},
    token:{type:String}
});
export default mongoose.model("userLogs",EsquemaPost);


