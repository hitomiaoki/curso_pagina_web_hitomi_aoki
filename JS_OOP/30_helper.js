/**
 * @class: Helper
 * @method isValidNumber
 * @method: isEntero
 */



module.exports = class helper {

    /**
     * @param {any} n 
     * @returns {boolean}
     */

     static isValidNumber(n) {

        let r = false
        if ( isNaN(n) 
        || typeof n == 'boolean'
        ||  n === ''
        || typeof n == 'object' )
        // || array.isArray(n) || n === null
       {
        r = false 
      }
      return r
    
    }
    
    /**
     * @param {number | string} n 
     * @returns {boolean}
     */
      static isEntero(n) {
      // return Number.isInteger(number(n))
      // return parseInt(n) === parseFloat(n)
      return Math.trunc(Number(n)) === Number(n)
     
    }
}




