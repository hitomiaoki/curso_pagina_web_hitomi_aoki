
const Factorial = require('./30_factorial.js')

/**
 * 1- Funcion boolean que comprueba
 *  que un valor puede ser tratado como numero
 * 
 * 2-  Funcion que comprueba que es un numero valido 
 * para poder calcular un factorial
 *   
 * 
 * 3-  Funcion que calcula el factorial de un numero
 * en caso de valores no valido, genera un error
 * 
 * 
 * 4-Funcion que muestra (renderiza) los resultados por pantalla
 *   al menos para las 2 primeras, realizar tasts unitaria
 */


 const n = 21
 const f_21 = new Factorial(n)
 console.log(f_21)


 const n = ''
 const f_21 = new Factorial(n)
 console .log(f_21)