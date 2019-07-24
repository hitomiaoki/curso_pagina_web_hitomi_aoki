export function app() {
    console.log('Cargando app')  
   
     function prueba() {
      class Lista extends Array {}
     let x = new Lista()
     console.dir(x)
     let nodo = document.querySelector('#nodos')
     console.dir( nodo instanceof Element)
     console.dir( nodo instanceof HTMLElement)
     console.dir(nodo.children)
     console.dir(nodo.children instanceof HTMLCollection)
     console.dir(nodo.children instanceof Array)
     console.dir(nodo.childNodes)
     console.dir(nodo.childNodes instanceof NodeList)
     console.dir(nodo.childNodes instanceof Array)
     }
    
     // Nodos
     let aEnlaces = document.querySelectorAll('.social a')
     let lista =  document.querySelector('.social ul')
     let counter = 0

     // Asignación manejadores
    
      aEnlaces.forEach(enlace => enlace
        .addEventListener('click', onClickEnlace)  );
            
     // Funciones

     function onClickEnlace(ev) {
         /*console.dir("ev.target")
         console.dir(ev.target)
         console.dir("ev.target.parentElement")
         console.dir(ev.target.parentElement)*/
         if (counter < 3) {
              ev.target.parentElement.outerHTML = "OPS!!"
              counter++   
         } else 
        /*ev.target.parentElement.parentElement.parentElement.outerHTML =  `<p> Opps!!, No existo </p>` */  
        lista.outerHTML = 'Opps!!, No existo'
     }
    
 }