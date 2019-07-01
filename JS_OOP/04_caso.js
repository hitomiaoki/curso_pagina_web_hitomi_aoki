'use strict'


/*** Función comprobarCaso
 * @description comprobar si la cadena tiene
 *   solo mayusculas (0)
 *   solo minusculas  (1)
 *   mayusculas y minusculas (2)
 * @param {string} cadena
 * @returns {number}
 */


 function comprobarCaso(cadena = '') {
     let r = 2
     if ( cadena == cadena.toUpperCase()) { // eres solo mayusculas
         r = 0
     } else if (cadena == cadena.toLowerCase) { // eres solo minusculas
         r = 1
     }
     return r
 }

 function mostrarComprobacionCaso(cadena = '') {
      const msg = [
        'solo mayusculas (0)',
        'solo minusculas (1)',
        'mayusculas y minusculas (2)',
     ]
     console.log(msg(comprobarCaso(cadena)))
 }

module.exports = {}
module.exports.comprobarCaso = comprobarCaso
module.exports.mostrarComprobacionCaso = mostrarComprobacionCaso