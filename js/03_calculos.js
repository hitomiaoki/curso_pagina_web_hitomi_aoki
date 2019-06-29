
function isValidNumber(p) {
    let r = true 
    if ( typeof p == 'boolean' |
         typeof p == 'object' ||
         isNaN(p)
    ) {
       r = false 
    }
    return r 
}

/**
 *Función sumar
 * @description recibe 2 parámetros y devuelve la sumar de ambos
 * @param {number}
 * @param {number}
 * @returns {number}
 */
function sumar ( a =0, b = 0) {
 if (!isValidNumber(a) ||
     !isValidNumber(b) ) {
          throw new Error('parametros incorrectos')         
      }
   /*
     let c = a + b
     return c*/
     return a + b
  }


 /** Función restar
 *@description {number} recibe 2 parámetros y devuelve la restar de ambos
 *@param {number} a
 *@param {number} b
 *@returns {number}
 */
  function restar(a = 0, b = 0) {
     return a - b       
  }      
      
  /** Función multiplicar
  *@param {number} a
  *@param {number} b
  *@returns {number} 
  */
  function multiplicar(a = 0, b = 1) {
     return a * b  
  }       
          
  
  /** Función dividir
  * @param {number} a
  * @param {number} b
  * @returns {number}
  */         
  function dividir(a = 0, b = 1) {
     return  a / b
  } 
              

  /**
  *Función Mostrar
  * @description Recibe un texto y lo saca por pantalla
  * @param {string / number}
  * @returns {void}
  * 
  */
  function mostrar (cadena = '') {
     console.log(cadena)         
  }     


  module.exports = {}
  module.exports.sumar = sumar
  module.exports.restar = restar
  module.exports.multiplicar = multiplicar
  module.exports.dividir = dividir

    

    
    