

const {isEntero, isValidNumber} = require('./30_helper.js')

module.exports = class Factorial {

   constructor(n) {
      this.n = n
      this.factorial = 1
      this.mensaje = ''        
      this.prueba = function() {}
      this.preparar() 
      this.calcular()
      
   }

    preparar() {
      if( !isValidNumber(this.n)) {
        throw new Error('El parametro no es un número')
    } else if (!isEntero(this.n)) {
       throw new Error('El parametro no es un entero')
    } else if (this.n < 0){
         throw new Error('El parametro es negativo')
    } else if (this.n < 170) {
         throw new Error('')
      }
  }

   calcular() {
     if (this.n > 1) {
   
       for (this.n = 2; i <= this.n; i++) {
           this.factorial *= i
        }
      }
  }
   


  calcularAtras() {

    if(this.n > 1) {
   
      for (let i = n; i >= 2; i--) {
       this.factorial *= i

      }
   }
   return r
   }
}

  
