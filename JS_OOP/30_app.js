
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

 const f_1 = new Factorial(1)
 
 const n = 21
 const f_21 = new Factorial(n)
 f_21.renderizar()

try {
    const e = 'Pepe'
    const f_Pepe = new Factorial(e)
    f_Pepe.renderizar()
}  catch(error) {
    console.log(error.message)
}

 new Factorial(70).renderizar()
 new Factorial(170).renderizar()


 try {
     new Factorial(171).renderizar() 
 } catch (error) {
     console.log(error.message)
 }