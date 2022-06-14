$(document).ready(function(){

    $('.action_btn2').on('click',function(){

    let btn=$('.action_btn2').index(this);
    let doc=$('.doc').eq(btn);
   
    let d=doc.val();


    alert("SE BORRARAN LOS DATOS CON EL DOCUMENTO" +d+ "Por Favor Refresque la pagina");
    $.ajax({
        type:"POST",
        url:'/borrar',
        data:{
            dd:d
        }
    });

    });
});