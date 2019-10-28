var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('me diste un clic')
    var datos = new FormData(formulario);
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))
    fetch('post.php',{
        method: 'post',
        body:datos
    })
    .then(res => res.json())
    .then(data => {
     console.log(data)
     if(data==='false'){
        respuesta.innerHTML =`
        <div class="alert alert-danger" role="alert">
            Llena todos los campos
        </div>
        `           
     }else{
        respuesta.innerHTML =`
        <div class="alert alert-primary" role="alert">
            ${data}
        </div>
        `       

     }
    })
})