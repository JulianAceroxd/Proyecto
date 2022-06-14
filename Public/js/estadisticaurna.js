$(document).ready(function(){

    $('.botons').on('click',function(){

    let btn=$('.botons').index(this);
    let doc=$('.id').eq(btn);
    const traerDatos= async ()=>{
    let d=doc.val();

   const d2={
       id: d
   };
  
   let =url='/opciones'
   fetch(url,{
    method:'POST',
    headers:{

        "content-Type":"application/json",
    },
    body: JSON.stringify(d2),
   })
   .then(Response=>Response.json())
   .then(data=>mostrarDatos(data))
   .catch(error=>console.log(error))
   const mostrarDatos=(data)=>{
     alert(data[1].Op)



   for(i=0; i<data.length;i++){
    var button = '<form action="Votos" method="post"><input type="submit"value="'+data[i].Opcion+'"  id="num_parrafos" name="opcion"/><input type="hidden"value="'+results.map(item=>item.IdUrna)[0]+'"  id="num_parrafos" name="id"/></form>'
    $('form').append(button);
    alert(data[i].Opcion)      

}}
  
    
    const data=await fetch ('/urnadatos',{
        method:'POST',
        headers:{

            "content-Type":"application/json",
        },
        body: JSON.stringify(d2),
    }
    
    );
 
    const results=await data.json();
  
    const finalData=[{
       
        x:results.map(item=>item.Opcion),
        y:results.map(item=>{ 

            const cantidadtotal=results.reduce((a,b)=>{
      
    
       return  a+b.cantidad 
            },0)
            
            const rt= item.cantidad/cantidadtotal;
            console.log(cantidadtotal);
            return rt*100;
            
            
        }),
        type:"bar"
    }]
   
for( let i3=0; i3<results.map(item=>item.Opcion).length;i3++){
 
  
   
   

}
   const resultado = document.getElementById('resultados')
  




    Plotly.newPlot('plotlyChart'+d,finalData)

     }
     traerDatos();


    

    });
});