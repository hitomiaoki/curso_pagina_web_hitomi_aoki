
function isValidNumber(p) {
    if (typeof p == 'boolean' ||
    typeof p == 'object' ||
    isNaN(p) ||
    ) {
    
    }
}


/**
 *función sumar
 * @description recibe 2 parámetros y devuelve la suma de ambos
 * recibe 2 parámetros
 * devuelve la suma de ambos
 * 
 * @param {number}
 * @param {number}
 * @returns {number}
 *  
 * función pura
 */
 function sumar ( a =0, b = 0) {
    
       if (typeof a == 'boolean' ||
           typeof b == 'boolean' ||
           typeof a == 'object' ||
           typeof b == 'object' ||
           a == NaN ||
           b == NaN ||
           isNaN(a) ||
           isNaN(b) ||
        )
        {
           
       }


    }
    

     
      /** funcion restar
       *@description {number} recibe 2 parámetros y devuelve la resta de ambos
       *@param {number} a
       *@param {number} b
       *@returns {number}
       */
    
       function restar(a = 0, b = 0) {
       return a - b
         
      }
    
      /** funcion multiplicar
       *@param {number} a
       *@param {number} b
       *@returns {number} 
       */
    
      
      function multiplicar(a = 0, b = 0) {
    
        return a * b
          
       }


    /**
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
     function mostrar (mensaje = '') {
      console.log(mensaje)   
    
     }
    
     module.exports = {}
     module.exports.sumar = sumar
     module.exports.restar = restar
     module.exports.multiplicar = multiplicar
     module.exports.dividir = dividir