

//Ejemplo de interación y condición

let limite = 10
let acumulador = 0
let maximo = 200
let contador = 0
for (let i = 0; i < limite; i++) {
     contador = i 
     console.log(i)
     if(acumulador + (i*i) > maximo) {
       break
     }
   acumulador =+ (i*i)
}
console.log(acumulador, contador)


/** JSDoc
 *  Saber si un número es multiplo de tres,
 *  Seleccionar en una array los que lo sean  y guardarlos en otro array 
 *  mostrarlo por pantalla
 * 
 */


/** function isMultiplo
 *  @descripcion devuelve true si un numero m es multiplo de n
 *  @param {number}: m
 *  @param {number}: n
 *  @return {boolean}
 * 
 */

  function isMultiplo (m = 0, n = 0) {
    let r = true
    if (n%m) {  // n%m !=0)
        r = false  
    }
    return r 
 }


 // Espectativas
 console.log('isMultiplo(2,20) debe dar true')
 // Prueba
 console.log(isMultiplo(2,20))
 // Espectativas
 console.log('isMultiplo(2,21) debe dar false')
 // Prueba
 console.log(isMultiplo(2,21))
 // Espectativas
 console.log('isMultiplo(2,-20) debe dar true')
 // Prueba
 console.log(isMultiplo(2,-20))
 // Espectativas
 console.log('isMultiplo(2,-21) debe dar false')
 // Prueba
 console.log(isMultiplo(2,-21))
 // Espectativas
 console.log('isMultiplo(3,20) debe dar false')
 // Prueba
 console.log(isMultiplo(3,20))
// Espectativas
console.log('isMultiplo(3,21) debe dar false')
 // Prueba
 console.log(isMultiplo(3,21))

/** function extraerMultiplos
 *  @description extraer de un array los multiplos de n
 *  @param {number}: n
 *  @param {array}: aDatos
 *  @returns {array}
 */

function extraerMultiplos(n, aDatos) {
    let r = []
    return r
}


 {
  /*
let aDatos = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
n%3 == 0    
}*/

//+= es lo mismo que decir acumulador
      
 }
 

