$(document).ready(function(){
 
    $('#botons').on('click',function(){
alert("dio click")
    let btn=$('.botons').index(this);
    let nn=$('#nombre').eq(btn);
    let ii=$('#id').eq(btn);
   
    let no=nn.val();
    let i=ii.val();

    alert("esta es la opcion"+no+"este es el id"+i)


    alert("Opcion Almacenada")
    $.ajax({
        type:"POST",
        url:'/agrop',
        data:{
            n2:no,i2:i
        }
    });

    });
});