
/** funcion isPalindromo
 * @description : comprobar si in string es palindromo
 * @param {string} cadena 
 * @returns {boolean}
 */


const isPalindromo = (cadena = '') => {
   let r = false
   const cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
   //console.log(cadenaSinEspacios)
   const cadenaInversa = cadenaSinEspacios.reverse.split('').reverse().join('')
   //console.log(cadenaInversa) para comprobar
   if (cadenaSinEspacios  === cadenaInversa) {
      r = true  
   }
  return r
}    

const isPaliShort = (cadena = '') => {
      sinEspacios = cadena.split(' ').join('').toLowerCase()
      return sinEspacios ===
         sinEspacios.split('').reverse().join('') ? true : false
}


module.exports = {}
module.exports.isPalindromo = isPalindromo
module.exports.isPaliShort = isPaliShort