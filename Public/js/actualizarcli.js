$(document).ready(function(){

     $('.action_btn').on('click',function(){
 
     let btn=$('.action_btn').index(this);
     let doc=$('.doc').eq(btn);
     let cli=$('.cli').eq(btn);
     let ape=$('.ape').eq(btn);
     let correo=$('.correo').eq(btn);
     let celular=$('.celular').eq(btn);
     let sexo=$('.sexo').eq(btn);
     let fecha=$('.fecha').eq(btn);
 
     let d=doc.val();
     let c=cli.val();
     let a=ape.val();
     let co=correo.val();
     let ce=celular.val();
     let s=sexo.val();
     let f=fecha.val();
 
     alert("RECIBIENDO DATOS CORRECTAMENTE");
     $.ajax({
         type:"POST",
         url:'/actualizar2',
         data:{
             dd:d,cc:c,aa:a,co:co,ce:ce,se:s,ff:f
         }
     });
 
     });
 });