export function app() {

    console.log('Cargando app')
    console.log(document)
    console.dir(document)

    // Nodos del DOM 
    const aBtns =  document.querySelectorAll('.btn')
    const inNombre = document.querySelector('#in-nombre')
    const outSaludo = document.querySelector('#out-saludo')


    const inNombre2 =  document.querySelector('#in-nombre2') 
    const outSaludo2 = document.querySelector('#out-saludo2')

    /* Otro opción seria
    const nodos = {
    btnNormal : document.querySelector('#btn-normal'),
    btnSuper : document.querySelector('#btn-super'),
    inNombre :  document.querySelector('#in-nombre') ,
      outSaludo: document.querySelector('#out-saludo'),   
    }*/

    // Manejadores de eventos

     aBtns.forEach( (btn) => {btn.addEventListener('click', onBtnClick)
     inNombre2.addEventListener('input', escribirContinuo) 
     });
    

    function onBtnClick(eventos) {
        let message
        switch (eventos.target.id) {
          case 'btn-normal':
              message = `Hola ${inNombre.value}`
            break;
          case 'btn-super':
              message = 'Te he dicho que no tocaras'
            break;
         default:
              message = 'Boton sin funcionalidad'
            
        }
        //outSaludo.textContent = message
        outSaludo.value = message

     }

     function escribirContinuo() {
        outSaludo2.value = inNombre2.value
          
    }
  
}
 
