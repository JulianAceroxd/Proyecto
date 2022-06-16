const express=require('express');
const Controller = require('../Controlador/Controller');
const Rutas=express.Router();

//EN LOS CONST UTILIZAMOS Y LLAMAMOS LAS LIBRERIAS NECESARIAS
//RUTAS ESPECTADOR.
Rutas.get('/urnaEspec',Controller.urnaEspec);
Rutas.get('/NotiEspec',Controller.NotiEspec);
Rutas.get('/partidoespec/:id',Controller.PartidoEspec);
///

///RUTAS DEL USUARIO.
Rutas.get('/Usuario',Controller.Usuario);
Rutas.get('/urnaUsu',Controller.urnaUsu);
Rutas.get('/NotiUsu',Controller.NotiUsu);
Rutas.get('/partidoUsu',Controller.PartidoUsu);
Rutas.post('/comentarios',Controller.comentarios);
Rutas.post('/likes',Controller.likes);
Rutas.post('/AgrComentarios',Controller.Comentario);







Rutas.get('/',Controller.index); 
Rutas.get('/Registro',Controller.Registro);
Rutas.get('/administrador',Controller.Admin);

Rutas.get('/urna',Controller.consultageneral);
Rutas.post('/urnadatos',Controller.consultageneralurna);
Rutas.post('/Votos',Controller.votos);


Rutas.post('/agrint',Controller.agrint);

Rutas.post('/agrpar',Controller.agrpar);
Rutas.post('/agrnot',Controller.agrnot);
Rutas.post('/agrfor',Controller.agrfor);

Rutas.post('/agru',Controller.agru);
Rutas.get('/AgreInt',Controller.agregarint);
Rutas.get('/opurna',Controller.op);
Rutas.post('/agrop',Controller.agrop);
Rutas.post('/candi',Controller.candi);

Rutas.get('/partido/:id',Controller.partido);
Rutas.get('/partidos',Controller.partidos);

Rutas.get('/urnaadmin',Controller.urnaadmin);
Rutas.get('/crearpartido',Controller.crearpartido);
Rutas.get('/crearnoticia',Controller.crearnoticia);
Rutas.get('/crearforo',Controller.crearforo);

Rutas.get('/cerrar',Controller.cerrar);
Rutas.get('/login',Controller.Iniciar);
Rutas.get('/partidos',Controller.Partidos);
Rutas.get('/noticias',Controller.Noticias);
Rutas.get('/crearparti',Controller.CrePartidos); 
Rutas.get('/crearUrna',Controller.CreUrnas);  //HACEMOS LLAMADO DE EL CONTROLADOR INDEX QUE ES NUESTR ARCHIVO O RAIZ PRINCIPAL
Rutas.post('/Insertar',Controller.insertaru);
Rutas.post('/Insertarparti',Controller.insertarpartido);
//Rutas.post('/Insertarforo',Controller.insertarforo);
Rutas.post('/Logine',Controller.Logine); // POR MEDIO DE EL ACTION QUE TENEMOS EN EL LOGIN, SE LLEVA ESA INFORMACION A NUESTRO CONTROLER Y GENERA LA RUTA


module.exports=Rutas;