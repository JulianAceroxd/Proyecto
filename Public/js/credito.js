$(document).ready(function(){
 
    $('.action_btn4').on('click',function(){

    let btn=$('.action_btn4').index(this);
    let doc=$('.doc').eq(btn);
   
    let d=doc.val();

   


    alert("En Unos Segundos Sera Redirigido a la vista de las linea de credito identificadas con el documento"+d);
    $.ajax({
        type:"POST",
        url:'/creditos',
        data:{
            dd:d
        }
    });

    });
});