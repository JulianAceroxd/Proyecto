$(document).ready(function(){

    $('.botons').on('click',function(){
alert("tambien")
    let btn=$('.botons').index(this);
    let doc=$('.id').eq(btn);
   
    let d=doc.val();
alert(d)
    
    $.ajax({
        type:"POST",
        url:'/solicitarop',
        data:{
            dd:d
        }
    });


    
  


    

    });
});