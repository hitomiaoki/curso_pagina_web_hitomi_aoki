/**
 * JSDoc
 * @description Programa que calcula y muestra
 *              si un número es par o impar
 */


 /**
  * @description Función que calcula si un número es par
  * @param {number} : n
  * @returns {boolean}
  */

  function esPar(n = 0) {
    let r = true
    if ((n%2)) { // si es par
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
       
   ]
   let i =  Number (esPar(n))
   console.log(mensajes[i])   
   }

  function probar() {
     let x
     x = 1
     x = 2
     x = 345
     x = 98
     x = 0
     x = -4
     x = -5
     mostrar(x) 
  }


   probar()