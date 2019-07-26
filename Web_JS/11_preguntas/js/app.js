export function app() {
    console.log('Cargando app')   
    
    function ejemplo(){
    let h2 = document.querySelector('h2')
    h2.id = "h2-01"
    h2.name = "h2-01"
    h2.setAttribute('title', 'Esto es una tonta')
    console.log(h2.name)
    console.log(h2.getAttribute('title'))
    //h2.className += 'cl4'

    }
   

    // Nodos DOM
    let aBtn = document.querySelectorAll('.boton')
    let texto = document.querySelector('#texto')

    // Asignar manejadores
    aBtn.forEach(btn => 
      btn.addEventListener('click', onClickBoton)  
        
     );

   function onClickBoton() {
       texto.classList.toggle('oculto') 
       aBtn.forEach(btn => btn.classList.toggle('oculto'))
   }

   
   /** Seccion Preguntas */

   let aPreguntas = document.querySelectorAll('.p')
   
   aPreguntas.forEach(btn => btn.addEventListener('click', onClickQ))
   

   function  onClickQ(ev) {
       aRespuestas.forEach(res => res.addEventListener)
   }

   
     
   let abotones = document.querySelector('.boton')

   abotones.addEventListener('click', onClickP)

   function onClickP(ev) {
       
   }

  

 }