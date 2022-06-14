   //NUESTRO ARCHIVO PRINCIPAL QUE CONTIENE LAS LIBRERIAS QUE ESTAMOS
   
   const express=require('express');
const app=express();
const path=require('path')  
const morgan=require('morgan');
const session= require('express-session');
const multer=require('multer');
const mimeTypes=require('mime-types');
 const storage= multer.diskStorage({
     destination:path.join(__dirname, 'Public/imagenes'),
filename: (req, file , cb)=>{
  
cb(null,Date.now()+"." + mimeTypes.extension(file.mimetype))
}

});
app.use(express.json())
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname,'Public')));
app.set('view engie','ejs');
app.set('views',path.join(__dirname,'Vista'));
app.use(session({
    secret:'123',
    resave:true,
    saveUninitialized:true
}));
app.use(multer({
   storage,
    dest: path.join(__dirname,'Public/imagenes')
}).single('img'))
app.use(express.urlencoded({extended:true}));
app.use(require('./Rutas/Rutas'));
app.use((err,req,res,next)=>{
    res.send({err:err.message});
});



//SERVIDOR
 app.set('port',process.env.PORT ||3000);
 app.listen(app.get('port'),()=>{
console.log(`Actualmente estamos en el puerto ${app.get('port')}`);

 });
 
