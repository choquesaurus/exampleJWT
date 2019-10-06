const path =require('path');
require("babel-polyfill");
module.exports={
    entry:["babel-polyfill","./src/index.js"],
    output:{
        path:__dirname+"/src/public",
        filename:"Bundle.js"
    },
    /*configuracion para utilizar  webpack server
        ---> historyapifallback --> para que pueda reconocer los endpoint  las rutas  al actualizar  y escribirlas
        manualmente
        --> contentBase --> que archivo para cargar en el webpack server
    */
    devServer:{
        port:1234,
        contentBase:path.join(__dirname,'src/public'),
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                use:"babel-loader",
                test:/\.js$/,
                exclude:"/node_modules/"
                
            },
            {
               
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i,
                exclude:"/node_modules/"
            }
        ]
    }
};