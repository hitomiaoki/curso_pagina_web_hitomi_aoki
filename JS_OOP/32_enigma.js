/**  
 *  1 Crear un programa con funciones de descriptación y
 *   encriptacion
 *  2 El algoritmo sera simplemente sustituir cada caracter por el 
 *  coresponciente a la suma de su código UTF + el de un
 *  número fijo usado como clave. 
 * 
 *  Ejemplo
 * 
 *  Hola <-----clave 3 -------> krncc
 * 
 *  @param {string}
 *  @param  {string}
 *  @returns
 * 
 */

 
 


  class enigma {
      constructor() {
         this.clave = 0
         this.cadena = ''
         this.criptoCadena = ''
      }



       encriptar (cadena, clave) {
          this.criptoCadena = ''
          this.cadena = cadena
          this.clave = clave
         
        /*  this.arrayCodificado =
          this.cadena.split('').map(letra => {
               this.arrayCodificado.push( String.fromCharCode(letra.charCodeAt(0) + this.clave)
                ).join('')     
         });*/

         let aCadena = this.cadena.split('')
         for (const letra of aCadena) {
         
           const numLetraCodificada = letracharCodeAt(0) + this.clave
           const letraCodificada =  String.fromCharCode(numLetraCodificada)
           this.criptoCadena += letraCodificada     
           }

         }
 
      descriptar(cadena, clave) {
          this.criptoCadena = cadena
          this.clave = clave 
          let aCadena = this.criptoCadena.split('')
          for (const letra of aCadena) {
         
            const numLetraCodificada = letracharCodeAt(0) - this.clave
            const letraCodificada =  String.fromCharCode(numLetraCodificada)
            this.criptoCadena += letraCodificada     
            }
      }

   }
       
 
    let cadena = 'Hola Pepe'
    enigma = new Enigma()
    enigma.encriptar(cadena, 3)
    console.log(enigma.criptoCadena)
    enigma.descriptar(enigma.criptoCadena, 3)
    console.log(enigma.cadena)
