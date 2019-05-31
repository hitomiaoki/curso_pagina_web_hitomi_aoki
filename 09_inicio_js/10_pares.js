/**
 * JSDoc
 * @description Programa que calcula y muestra
 *              si un número es par o impar
 */


 /**
  * @description Función que calcula si una expresión 
  *              es convertible a un número valido
  *              rechazando objects,arrays,boolean,null
  *              undefined,'' y string no númericos
  * @param {any} n
  * @returns {boolean}
  */

   function isValidNumber(n){
    let r = true
    if (isNaN(n) || typeof n == 'boolean'    
    || array.isArray(n)  ||  n == '' || n == null) {
     r = false
    }
    return true   
}

    
  /**
   * 
   * @param {number} : n
   * @return {void} 
   */
   function isEntero(n = 0) {
    return (parseInt(n))   === parseFloat(n) 
   }

  
  /**
   * @description Función que muestra si un número es par 
   *              Puede devolver -2, -1, true,false
   * @param {number} : n
   * @return {boolean} 
   */


  function esPar(n = 0) {
    let r = true
    if (isValidNumber) {
     // Excepción: n no es un número   
    } else if (!isEntero(n)){
     // Excepción: n no es un entero
    } else if((n%2)){  
     r = false     
    }
    return r
  }

  let x = 1
  console.log(!(n%2) )
  x = 2
  console.log(!(n%2) )
  x = 3
  console.log(!(n%2) )
  x = 4
  console.log(!(n%2) )

  /**
   * @description Función que muestra si un número es par o impar
   * @param {number} : n
   * @return {void} 
   */

   function mostrar(n) {
     let mensajes = [
       `El número ${n} es impar`,
       `El número ${n} es par`,
       `El número ${n} n no es un entero`,
       ` n no es un entero`
   ]
   let i =  Number (esPar(n)) // -2 -1, 0, 1
   if (1< 0) {
    i = -i + 1 // -1 -> 2 // -2 -> 3
     }
   }
 console.log(mensajes[i])  
  function probar() {
     let x
     x = 1
     x = 2
     x = 345
     x = 98
     x = 0
     x = 4.3
     x = -56.7
     x = 'Pepe'
     x = '56'
     mostrar(x) 
  }


   probar()


