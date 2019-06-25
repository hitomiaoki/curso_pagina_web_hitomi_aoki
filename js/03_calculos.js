
/**
 *Función sumar
 * @description recibe 2 parámetros y devuelve la suma de ambos
 * recibe 2 parámetros
 * devuelve la suma de ambos
 * @param {number}
 * @param {number}
 * @returns {number}
 */
function sumar ( a =0, b = 0) {
  /*
     let c = a + b
     return c*/
     return a + b
  }


 /** Función restar
 *@description {number} recibe 2 parámetros y devuelve la resta de ambos
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
  function multiplicar(a = 0, b = 0) {
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
  *función mostrar
  * @description Recibe un texto y lo saca por pantalla
  * @param {string / number}
  * @returns {void}
  * 
  * función interfaz
  */
  function mostrar (cadena = '') {
     console.log(cadena)         
  }     


  module.exports = {}
  module.exports.sumar = sumar
  module.exports.restar = restar
  module.exports.multiplicar = multiplicar
  module.exports.dividir = dividir

    

    
    