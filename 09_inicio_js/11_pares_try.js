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
  * @returns {boolean}
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
    return (parseInt(n)   === parseFloat(n)) 
   }

  
  /**
   * @description Función que calcula si un número es par 
   *              Puede devolver: -2, -1, true,false
   * @param {number} : n
   * @return {boolean} 
   * 
   */

  function esPar(n) {
    let r = true
    if (!isValidNumber(n)) {
         // Excepción: n no es un número
         const error = new Error ( `${n} no es número`)
         error.número = 1
         throw error  
    } else if (!isEntero(n)){
        // Excepción: n no es un entero
        const error = new Error ( ` El número ${n} no es entero`)
        error.número = 0
        throw error  
    } else if(n%2){  
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
     let output = ''
     let mensajes = [
       `El número ${n} es impar`,
       `El número ${n} es par`,   
   ]

   let excepciones = [
    `El número ${n} n no es un entero`,
    `${n} no es un número` 
   ]
   try {
      let i =  Number(esPar(n)) //i: 0, 1
      output = mensajes[i]
   } catch (error) { // error: -2 -1
      // i = -error + 1 // -1 -> 2 // -2 -> 3
     output = excepciones[error.numero]
    // output = error.mensaje
   }
     console.log(output)
 }
 
 mostrar('Pepe')
 mostrar(2.4)

 
 /*

    Gestión de errores
  const x = 67
  let z = 45
  try {
   // x = 51 // => un throw
   //throw 'Probando error'
   z = z + x
   console.log('z vale', z)
  } catch(error) {
   console.log('Disculpa,se ha producido un error')
   if (error.name){
    console.log(error.name, error.message)
   }else {
     console.log(error) 
   }
 
   }

}
 console.log('x vale',x) */



exports.esPar = esPar;
exports.mostrar = mostrar;

