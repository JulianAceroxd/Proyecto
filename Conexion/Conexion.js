const mysql =require('mysql');  //ACA LLAMAMOS LA FUNCION O LIBRERIA NECESARIA PAR UTILIZAR NUESTRA BD UBICADA EN MYSQL
module.exports=()=> //ACA EXPORTAMOS PARA PODER UTILIZAR MAS ADELANTE
mysql.createConnection({
host:'bvnembrkmygpflwc1n4u-mysql.services.clever-cloud.com',
user:'ukihhchzpzz8oaxo',   //PRINCIPALMENTE SE CREA LA CONEXION UTILIZANDO EL MODULO, Y EL HOST,USER,PASSWORD.NOMBRE DE LA BASE DE DATOS
password:'WvOhkYtzJckQ1dnxfzaY',
database:'bvnembrkmygpflwc1n4u',
port:"3306"
});