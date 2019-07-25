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
    
   

 }

 