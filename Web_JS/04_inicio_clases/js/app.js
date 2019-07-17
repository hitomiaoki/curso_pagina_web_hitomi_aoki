export class App {

   constructor() {
     console.log('Cargando app')
        // Nodos del DOM 
        this.aBtns =  document.querySelectorAll('.btn')
        this.inNombre = document.querySelector('#in-nombre')
        this.outSaludo = document.querySelector('#out-saludo')


        this.inNombre2 =  document.querySelector('#in-nombre2') 
        this.outSaludo2 = document.querySelector('#out-saludo2')

        // Manejadores de eventos
         this.aBtns.forEach( (btn) => {btn.addEventListener('click',
              this.onBtnClick.bind(this)) // palabra clave bind(this)
         this.inNombre2.addEventListener('input', 
              this.escribirContinuo) 
         });
        console.log(this)  
              
   }

     onBtnClick(eventos) {
        let message
        switch (eventos.target.id) {
          case 'btn-normal':
              message = `Hola ${this.inNombre.value}`
            break;
          case 'btn-super':
              message = 'Te he dicho que no tocaras'
            break;
         default:
              message = 'Boton sin funcionalidad'
            
        }

        console.log(this)
        //outSaludo.textContent = message
        this.outSaludo.value = message

     }

      escribirContinuo() {
        this.outSaludo2.value = this.inNombre2.value
          
    }
  
}
 
