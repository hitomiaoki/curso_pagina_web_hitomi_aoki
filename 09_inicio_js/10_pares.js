/**
 * JSDoc
 * @description Programa que calcula y muestra
 *              si un número es par o impar
 */


 /**
  * @description Función que comprueba si una expresión 
  *              es convertible a un número valido
  *              rechazando objects,arrays,boolean,null
  *              undefined,'' y string no númericos
  * @param {any} n
  * @returns { boolean}
  */

   function isValidNumber(n){
    let r = true
    if (isNaN(n) || typeof n == 'boolean'    
    || Array.isArray(n)  ||  n === '' || n === null) {
        r = false
    }
    return r   
}

    
  /**
   * 
   * @param {number} : n
   * @return {boolean} 
   */
   function isEntero(n = 0) {
      return (parseInt(n)  === parseFloat(n)) 
   }

  
  /**
   * @description Función que calcula si un número es par 
   *              Puede devolver: -2, -1, true,false
   * @param {number} : n
   * @return {number | boolean} 
   * 
   */

  function esPar(n) {
    let r = true
    if (!isValidNumber(n)) {
     // Excepción: n no es un número   
    } else if (!isEntero(n)){
     // Excepción: n no es un entero
       return -1
    } else if (n%2) {  
     r = false    
    }
    return r
  }

  /*let x = 1
  console.log(!(n%2) )
  x = 2
  console.log(!(n%2) )
  x = 3
  console.log(!(n%2) )
  x = 4
  console.log(!(n%2) )*/

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
   if (1< 0) { // código de error
    i = -i + 1 // -1 -> 2 // -2 -> 3
     }
     console.log(mensajes[i])
   }
   

 exports.isEntero = isEntero
 exports.esPar = esPar
 exports.mostrar = mostrar


