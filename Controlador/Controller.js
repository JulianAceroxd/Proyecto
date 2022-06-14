const Connection=require('../Conexion/Conexion');  //ACA REQUERIMOS LA CONEXION DE BASE DE DATOS PARA LAS CONSULTAS
const  cnn=Connection();  //ACA POR MEDIO DE LA CONSTANTE CNN VAMOS A CONTENER LA CONEXION A LA BD
const {render}=require('ejs'); //ACA RENDERISAMOS LOS EJS PARA LA HORA DE HACER RENDERS LOS TOME CORRECTAMENTE
const bcryptjs=require('bcryptjs'); //LLAMAMOS EL MODULO DE INCRIPTACION DE CLAVES ANTERIORMENTE INSTALADO
const Controller={}; //HACEMOS INICIALIZAMOS EL CONTROLADOR 
const express=require("express");
const app=express(express)
//CONTROLADOR DE ESPECTADOR
Controller.urnaEspec=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
  
    cnn.query('SELECT * FROM tburna',(err,resbd)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
            if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                next(new Error(err));
                console.log("ERROR EN LA CONSULTA");
            }   
            else{
                console.log(resbd) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
                res.render('urnaespec',{Datos:resbd});  //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
            }
        })
    
    }

Controller.NotiEspec=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
  
        cnn.query('SELECT * FROM tbnoticias',(err,resbd)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
                if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                    next(new Error(err));
                    console.log("ERROR EN LA CONSULTA");
                }   
                else{
                    console.log(resbd) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
                    res.render('noticiasespec',{Datos:resbd});  //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
                }
            })
        
        }

Controller.PartidoEspec=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha          
            const {id}=req.params;  //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
        
        
        console.log("llega mal"+id)
        
         cnn.query('SELECT * FROM tbpartidos where IdPartido=?',[id],(err,resbd)=>{ 
            cnn.query('SELECT * FROM tbintegrantes where IdPartido=? LIMIT 3',[id],(err,resbd2)=>{ 
                cnn.query('SELECT * FROM `tbintegrantes` WHERE IdIntegrante!=1 and IdIntegrante!=2 AND idIntegrante!=3 and IdPartido=? LIMIT 5',[id],(err,resbd3)=>{ 
              //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
         if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                 next(new Error(err));
                 console.log("ERROR EN LA CONSULTA");
             }   
             else{
               
                     
                 console.log(resbd)
                 console.log(resbd2)
                 console.log(resbd3) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
                 res.render('partidosespec',{Datos:resbd,Datos2:resbd2,Datos3:resbd3});
                   //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
             
         }
         
         })
        })
        })
        
        
        }

 Controller.index=(req,res,next)=>{
res.render('index')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
res.send("ERROR DE CONTROLADOR");

}

//CONTROLADOR DE USUARIOS

Controller.urnaUsu=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
  
    cnn.query('SELECT * FROM tburna',(err,resbd)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
            if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                next(new Error(err));
                console.log("ERROR EN LA CONSULTA");
            }   
            else{
                console.log(resbd) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
                res.render('urnaUsu',{Datos:resbd});  //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
            }
        })
    
    }

Controller.NotiUsu=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
  
        cnn.query('SELECT * FROM tbnoticias',(err,resbd)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
                if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                    next(new Error(err));
                    console.log("ERROR EN LA CONSULTA");
                }   
                else{
                    console.log(resbd) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
                    res.render('NoticiasUsu',{Datos:resbd});  //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
                }
            })
        
        }
   Controller.PartidoUsu=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha          
            const {id}=req.params;  //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
        
        
        console.log("llega mal"+id)
        
         cnn.query('SELECT * FROM tbpartidos where IdPartido=?',[id],(err,resbd)=>{ 
            cnn.query('SELECT * FROM tbintegrantes where IdPartido=? LIMIT 3',[id],(err,resbd2)=>{ 
                cnn.query('SELECT * FROM `tbintegrantes` WHERE IdIntegrante!=1 and IdIntegrante!=2 AND idIntegrante!=3 and IdPartido=? LIMIT 5',[id],(err,resbd3)=>{ 
              //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
         if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                 next(new Error(err));
                 console.log("ERROR EN LA CONSULTA");
             }   
             else{
               
                     
                 console.log(resbd)
                 console.log(resbd2)
                 console.log(resbd3) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
                 res.render('PartidoUsu',{Datos:resbd,Datos2:resbd2,Datos3:resbd3});
                   //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
             
         }
         
         })
        })
        })
        
        
        }

 Controller.comentarios=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
    const {id}=req.body;
    console.log(id)
   cnn.query('SELECT u.NomUsu, u.ApeUsu, c.ComentarioNoti,c.likes,c.IdComentarioNoti, n.IdNoti, u.Img FROM tbnoticias AS n RIGHT JOIN tbcomennoticias AS c ON n.IdNoti = c.IdNoti JOIN tbusuarios AS u ON c.IdUsu=u.IdUsu WHERE n.IdNoti=?',[id],(err,resbd)=>{   //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
                    if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                        next(new Error(err));
                        console.log("ERROR EN LA CONSULTA");
                    }   
                    else{
                        console.log(resbd) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
                        res.json(resbd);  //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
                    }
                })
            
            } 


                Controller.likes=async(req,res,next)=>{
                    let n=parseInt(req.body.likes);
                     n=n+1;
                    const a=req.body.id;
                  console.log(n+a)
                
                    cnn.query('UPDATE tbcomennoticias SET  likes="'+n+'" WHERE IdComentarioNoti="'+a+'"',async(err,respbb)=>{
                        if(err){
                            next(new Error(err));
                
                        }
                        else{
                            res.redirect('NoticiasUsu')
                            console.log("Actualizado")
                            
                        }
                
                    })
                }



Controller.Registro=(req,res,next)=>{
    res.render('registra')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
    res.send("ERROR DE CONTROLADOR");
    
    }
    Controller.Iniciar=(req,res,next)=>{
        res.render('login')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
        res.send("ERROR DE CONTROLADOR");
        
        }
        Controller.Partidos=(req,res,next)=>{
            res.render('partidos')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
            res.send("ERROR DE CONTROLADOR");
            
            }
            Controller.CrePartidos=(req,res,next)=>{
                res.render('crearparti')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                res.send("ERROR DE CONTROLADOR");
                
                }
                Controller.CreForos=(req,res,next)=>{
                    res.render('crearforo')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                    res.send("ERROR DE CONTROLADOR");
                    }
                    Controller.CreUrnas=(req,res,next)=>{
                        res.render('urna')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                        res.send("ERROR DE CONTROLADOR");
                        }
                        Controller.Admin=(req,res,next)=>{
                            res.render('administrador')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                            res.send("ERROR DE CONTROLADOR");
                            }
                            Controller.Usuario=(req,res,next)=>{
                                res.render('Usuario')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                                res.send("ERROR DE CONTROLADOR");
                                }
                            Controller.Noticias=(req,res,next)=>{
                                res.render('noticias')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                                res.send("ERROR DE CONTROLADOR");
                                }
                                Controller.Urna=(req,res,next)=>{
                                    res.render('urna')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                                    res.send("ERROR DE CONTROLADOR");
                                    }
                                    Controller.urnaadmin=(req,res,next)=>{
                                        res.render('urnaadmin')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                                        res.send("ERROR DE CONTROLADOR");
                                        }
                                        Controller.crearpartido=(req,res,next)=>{
                                            res.render('crearpartidos')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                                            res.send("ERROR DE CONTROLADOR");
                                            }
                                            Controller.crearnoticia=(req,res,next)=>{
                                                res.render('crearnoticias')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                                                res.send("ERROR DE CONTROLADOR");
                                                }
                                                Controller.crearforo=(req,res,next)=>{
                                                    res.render('crearforos')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
                                                    res.send("ERROR DE CONTROLADOR");
                                                    }
    Controller.insertaru=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECHA
        const r="Usuario";
        const n=req.body.nombre;
        const a=req.body.apellido;
        const c=req.body.usuario;     //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
        const p=req.body.pass;
        const es="Activo";
        const f=0;
        const i="1654875053715.png"

        const password=await bcryptjs.hash(p,8)  // INCRPTACION DE CONTRASEÑA POR MEDIO DEL HASH Y SU MODULO BCRYPT.JS
        console.log(n,a,c,p,password)
        cnn.query('INSERT INTO tbusuarios SET?',{Rol:r,NomUsu:n,ApeUsu:a,Usuario:c,ClaUsu:password,Estado:es,Faltas:f,Img:i},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
        if(err){
            next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
        }
        else{
            console.log(resbd);
        res.redirect('login')   //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
        }
        });


        }
        Controller.insertarpartido=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECH
            const n=req.body.nombre;
            const a=req.body.descripcion;
            const c=req.body.img;     //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
            
          
            cnn.query('INSERT INTO tbpartidos SET?',{NomPartido:n,DesPartido:a,ImgPartido:c},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
            if(err){
                next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
            }
            else{
                console.log(resbd);
            res.redirect('login')   //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
            }
            });
    
    
            }
        Controller.Logine=async(req,res,next)=>{  //LOGINN 
            const usu = await req.body.Usuario;  // TRAEMOS LOS NAME DE EL LOGIN PARA VALIDAR LOS CAMPOS
            const cla = await req.body.Password;
            console.log(usu,cla);
            cnn.query('SELECT * FROM tbusuarios WHERE Usuario=?',[usu],async(err,results)=>{  //CONSULTAMOS LOS DATOS EN LA BASE DE DATOS Y REEMPLAZAMOS VALORES CON LOS QUE DILIGENCIA EL USUARIO
                if(err){
                    next(new Error("ERROR AL REALIZAR LA CONSULTA",err)); //VALIDAMOS SI EXITEN ERRORES
            
                }else if(results!=0 && await(bcryptjs.compare(cla,results[0].ClaUsu))){ // SI EL RESULTADO ES DIFERENTE DE 0 ES QUE ENCONTRO EL USUARIO,POR MEDIO DE UN ARREGLO Y COMPARE, COMPARAMOS LO DILIGENCIADO POR EL USUARIO Y LO REGISTRADO EN LA BD                           console.log("Datos Correctossssssss");
    
               Nombre=results[0].NomUsu;
               Apellido=results[0].ApeUsu;
               IdUsu=results[0].IdUsu;
    
               Rol=results[0].Rol;  //CREAMOS SESIONES POR MEDIO DE UN ARREGLO, QUE NOS RETORNA LOS DATOS DE EL USUARIO LOGEADO
               req.session.Login=true;
               console.log(Nombre+Apellido+Rol); //GENERAMOS LA SESION AL DARLE COMO TRUE EN VERDADERA.
             
               switch(Rol) {
                case "Administrador":
              res.redirect("Administrador")
                break;
                case "Usuario":
                    Nombre=results[0].NomUsu;
               Apellido=results[0].ApeUsu;
             IdUsu=results[0].IdUsu;
    
               Rol=results[0].Rol;  //CREAMOS SESIONES POR MEDIO DE UN ARREGLO, QUE NOS RETORNA LOS DATOS DE EL USUARIO LOGEADO
               req.session.Login=true;
               console.log(Nombre+Apellido+Rol);
                    res.redirect("Usuario")
               }
               IdUsu=results[0].IdUsu;
                }
            
                
                else{
                   
                    console.log("DATOS INCORRECTOS"); //SALIMOS DEL IF DE ENTRADA Y SWITCH A UN VALIDADOR SI LOS DATOS SON INCORRECTOS 
                res.redirect('/'); //NOS REDIRIGE AL MISMO ARCHIVO
                }
            })
            
            
                }
                Controller.cerrar=(req,res,next)=>{
                    req.session.destroy(function (err) {
                        res.redirect('/'); //Inside a callback… bulletproof!
                       });
                }
//Bloque insertar Usuarios
Controller.consultageneral=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
  
cnn.query('SELECT * FROM tburna',(err,resbd)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
        if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
            next(new Error(err));
            console.log("ERROR EN LA CONSULTA");
        }   
        else{
            console.log(resbd) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
            res.render('inturna',{Datos:resbd});  //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
        }
    })

}



Controller.agregarint=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
  
    cnn.query('SELECT * FROM tbpartidos',(err,resbd)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
            if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
                next(new Error(err));
                console.log("ERROR EN LA CONSULTA");
            }   
            else{
                console.log(resbd) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
                res.render('crearint',{Datos:resbd});  //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
            }
        })
    
    }

    Controller.crearu=(req,res,next)=>{
        res.render('urna')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
        res.send("ERROR DE CONTROLADOR");
        
        }

        Controller.op=(req,res,next)=>{
            res.render('opurna')               //aca creamas nuestro controlador index o raiz, es la primera vista que tendremos al iniciar
            res.send("ERROR DE CONTROLADOR");
            
            }



   

Controller.consultageneralurna=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
    console.log(req.body)
    const {id}=req.body;     //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
   
console.log("entra al controlador"+id);

   
    cnn.query('SELECT o.IdUrna,o.Opcion, IFNULL( COUNT(r.IdUsu), 0) AS cantidad FROM tbopurna o LEFT OUTER JOIN  tbresurna r ON o.IdUrna=r.IdUrna AND o.Opcion=r.ResUrna WHERE o.IdUrna=? GROUP BY o.IdUrna,o.Opcion ORDER BY 1,2;',[id],(err,resbd)=>{ 
         //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
    if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
            next(new Error(err));
            console.log("ERROR EN LA CONSULTA");
        }   
        else{
          
                
            console.log(resbd)
          // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
            res.json(resbd);
              //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
        
    }
    
    })




}



   
    
  










Controller.partidos=(req,res)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
       //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
   


   
    cnn.query('SELECT * FROM tbpartidos',(err,resbd)=>{  //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
    if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
            next(new Error(err));
            console.log("ERROR EN LA CONSULTA");
        }   
        else{
          
                
            console.log(resbd) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
            res.json(resbd);
              //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
        
    }
    
    })



}

Controller.partido=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
    const {id}=req.params;  //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS


console.log("llega mal"+id)

 cnn.query('SELECT * FROM tbpartidos where IdPartido=?',[id],(err,resbd)=>{ 
    cnn.query('SELECT * FROM tbintegrantes where IdPartido=? LIMIT 3',[id],(err,resbd2)=>{ 
        cnn.query('SELECT * FROM `tbintegrantes` WHERE IdIntegrante!=1 and IdIntegrante!=2 AND idIntegrante!=3 and IdPartido=? LIMIT 5',[id],(err,resbd3)=>{ 
      //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
 if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
         next(new Error(err));
         console.log("ERROR EN LA CONSULTA");
     }   
     else{
       
             
         console.log(resbd)
         console.log(resbd2)
         console.log(resbd3) // EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
         res.render('partidos2',{Datos:resbd,Datos2:resbd2,Datos3:resbd3});
           //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
     
 }
 
 })
})
})


}


Controller.candi=(req,res,next)=>{    //creamos una consulta de usuarios por medio de la funcion flecha
    console.log()
    const {id}=req.body;  //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS


console.log("llega mal"+id)

 cnn.query('SELECT * FROM tbintegrantes where IdIntegrante=?',[id],(err,resbd)=>{ 
   
      //cnn que contiene la conexion a base de datos nos genera la consulta con un err que seria error o un resbd que seria una respuesta 
 if(err){ //VALIDAMOS EL VALOR RECIBIDO SEA ERROR O NO
         next(new Error(err));
         console.log("ERROR EN LA CONSULTA");
     }   
     else{
       
             
       
         console.log(resbd)// EN CASO QUE RETORNE RESPUESTA LA VARIABLE DATOS, CONTENDRA LO QUE NOS TRAE DE DESPUESTA
         res.json(resbd);
           //NOS RENDERISA A LA VISTA DONDE LLEVAREMOS LOS DATOS
     
 }
 

})


}



Controller.votos=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECH
    const o=req.body.opcion;
    const i=req.body.id;
    const id="14";
        //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
    console.log(o+i+id)
  
    cnn.query('INSERT INTO tbresurna SET?',{IdUrna:i,ResUrna:o,IdUsu:id},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
    if(err){
        next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
    }
    else{
        console.log(resbd);
    res.redirect('/urna')   //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
    }
    });


    }


    Controller.agru=(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECH
        const n=req.body.Nombre;
        const d=req.body.Descripcion;
        
            //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
        console.log(n+d)
      
        cnn.query('INSERT INTO tburna SET?',{NomUrna:n,DesUrna:d},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
        if(err){
            next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
        }
        else{
         id=resbd.insertId;
            cnn.query('SELECT * FROM tburna WHERE IdUrna=?',[id],(err,resbd2)=>{
      
        
        console.log(resbd2);
        res.render('opurna',{Datos:resbd2})
            });
    }   //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
        
        });
        
    
    
        }


        Controller.agrop=(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECH
            const id=req.body.i2;
            const o=req.body.n2;
            
                //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
            console.log("llega al controlador"+id+o)
          
            cnn.query('INSERT INTO tbopurna SET?',{IdUrna:id,opcion:o},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
            if(err){
                next(new Error(err));  //NOS MUESTRA EL ERROR POR MEDIO DEL IF
            }
            else{
             
            res.render('urna')
               
        }   //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
            
            });
            
        
        
            }
    Controller.agrint=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECH
        const p=req.body.Partido;
        const n=req.body.Nombre;
        const a=req.body.Apellido;
        const d=req.body.Descripcion;
        const i=req.file.filename;
            //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
        console.log(p+n+a+d+i)
      
        cnn.query('INSERT INTO tbintegrantes SET?',{IdPartido:p,NomInt:n,ApeInt:a,DesInt:d,ImgInt:i},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
        if(err){
            next(new Error(err)); 
            res.render('index', {
                alert: true,
                alertTitle: "Error",
                alertMessage: "SEÑOR USUARIO NO SE AGREGO EL INTEGRANTE",
                alertIcon:'error',
                showConfirmButton: true,
                timer: false,
                ruta: '/'    
            });

         //NOS MUESTRA EL ERROR POR MEDIO DEL IF
        }
        else{
            console.log(resbd);
            res.render('index', {
                alert: true,
                alertTitle: "CORRECTO",
                alertMessage: "¡SE AGREGO Al INTEGRANTE!'",
                alertIcon:'success',
                showConfirmButton: false,
                timer: 1500,
                ruta: 'Admi'  
            });  //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
        }
        });
    
    
        }
        Controller.agrpar=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECH
            const p=req.body.Nombre;
            const d=req.body.Descripcion;
            const i=req.file.filename;
                //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
            console.log(p+d+i)
          
            cnn.query('INSERT INTO tbpartidos SET?',{NomPartido:p,DesPartido:d,ImgPartido:i},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
            if(err){
                next(new Error(err)); 
                res.render('crearpartido', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "SEÑOR USUARIO NO SE AGREGO EL INTEGRANTE",
                    alertIcon:'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: '/'    
                });
    
             //NOS MUESTRA EL ERROR POR MEDIO DEL IF
            }
            else{
                console.log(resbd);
                res.render('administrador', {
                    alert: true,
                    alertTitle: "CORRECTO",
                    alertMessage: "¡SE AGREGO Al INTEGRANTE!'",
                    alertIcon:'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: 'Admi'  
                });  //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
            }
            });
        
        
            }
            Controller.agrnot=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECH
                const p=req.body.Nombre;
                const d=req.body.Descripcion;
                const i=req.file.filename;
                    //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
                console.log(p+d+i)
              
                cnn.query('INSERT INTO tbnoticias SET?',{NomNoti:p,DesNoti:d,ImgNoti:i},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
                if(err){
                    next(new Error(err)); 
                    res.render('crearnoticia', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "SEÑOR USUARIO NO SE AGREGO EL INTEGRANTE",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: '/'    
                    });
        
                 //NOS MUESTRA EL ERROR POR MEDIO DEL IF
                }
                else{
                    console.log(resbd);
                    res.render('administrador', {
                        alert: true,
                        alertTitle: "CORRECTO",
                        alertMessage: "¡SE AGREGO Al INTEGRANTE!'",
                        alertIcon:'success',
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: 'Admi'  
                    });  //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
                }
                });
            
            
                }
                Controller.agrfor=async(req,res,next)=>{  // CREACION PARA INSERTAR USUARIOS FUNCION FLECH
                    const p=req.body.Nombre;
                    const d=req.body.Descripcion;
                    const i=req.file.filename;
                        //POR MEDIO DEL CONST ALMACENAMOS EN LETRAS LOS VALORES DE LA PAGINA A INSERTAR,GRACIAS ESTO A LA RUTAS
                    console.log(p+d+i)
                  
                    cnn.query('INSERT INTO tbforos SET?',{NomForo:p,DesForo:d,Img:i},(err,resbd)=>{ // CNN CNEXION A BD Y SU RESPECTIVO CODIGO DE INSERT CON LOS VALORES DE CONST
                    if(err){
                        next(new Error(err)); 
                        res.render('crearforo', {
                            alert: true,
                            alertTitle: "Error",
                            alertMessage: "SEÑOR USUARIO NO SE AGREGO EL INTEGRANTE",
                            alertIcon:'error',
                            showConfirmButton: true,
                            timer: false,
                            ruta: '/'    
                        });
            
                     //NOS MUESTRA EL ERROR POR MEDIO DEL IF
                    }
                    else{
                        console.log(resbd);
                        res.render('administrador', {
                            alert: true,
                            alertTitle: "CORRECTO",
                            alertMessage: "¡SE AGREGO Al INTEGRANTE!'",
                            alertIcon:'success',
                            showConfirmButton: false,
                            timer: 1500,
                            ruta: 'Admi'  
                        });  //SI TODO SALE BIEN, NOS RETORNA A LA MISMA VISTA QUE ESTAMOS
                    }
                    });
                
                
                    }
        
    
    
    




module.exports=Controller;