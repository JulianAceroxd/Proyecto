 $(document).ready(function(){

$('.comentario-principal-usuario').on('click',function(){

let btn=$('.comentario-principal-usuario').index(this);
 let id=$('.comentario-principal-usuario').eq(btn);
 let d=id.val();
 
 const d2={
            id: d
        };
        
 let url='/comentarios'
                 fetch(url,{
            method:'POST',
            headers:{
                
        
                "content-Type":"application/json",
            },
            body: JSON.stringify(d2),
           })
                 .then(response=>response.json())
                 .then(data=>mostrar(data))
                 .catch(error=>console.log(error))
        
                 const mostrar=(data)=>{
                    let body=''
        for(i=0; i<=data.length;i++){
            if(data.length===0){
alert("Aun No Existen Comentarios Se El Primero En Comentar!");
                body+='<H1>Aun No Existen Comentarios Se El Primero En Comentar!</H1>'
               document.getElementById('comentarios'+data[i].IdNoti).innerHTML=body
            }else{
            body+=`
                <div class="comentario-principal-usuario">
            <div class="avatar">
                            <img src="Imagenes/${data[i].Img}" alt="img">
                        </div>
                        <div class="comentario">
                            <div class="usuario-comentario">
                                <div class="texto">
                                    <a href="#" title="" class="nombre-usuario">${data[i].NomUsu} ${data[i].ApeUsu} :</a> ${data[i].ComentarioNoti}
                                    <div class="menu-comentario">
                                        <i class="fas fa-pen"></i>
                                        <ul class="menu">
                                            <li><a href="">Editar</a></li>
                                            <li><a href="">Eliminar</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="botones-comentario">

                                    <form id="formularios">
                                        <input type="hidden" placeholder="Usuario" name="id" value="${data[i].IdComentarioNoti}">
                                        <i class="fas fa-thumbs-up"></i>
                                        <input type="submit" class="boton-puntuar" name="likes" value="${data[i].likes}">
                                    </form>

                                    <span class="tiempo-comentario">
                                        hece 3 min
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    `        
                  
               console.log(    document.getElementById('comentarios'+data[i].IdNoti).innerHTML=body)
                  
        }
       }
      }

     
      
});

   

});
const form=document.getElementById('formularios');
if(form!=null){
form.addEventListener('submit',function(e){
   e.preventDefault();
   alert("entra al form")
   console.log(form)


})
}
    


