/**  
 *  1 Crear un programa con funciones de descriptación y
 *   encriptacion
 *  2 El algoritmo sera simplemente sustituir cada caracter por el 
 *  coresponciente a la suma de su código UTF + el de un
 *  número fijo usado como clave. 
 * 
 *  Ejemplo
 * 
 *  Hola <-----clave 3 -------> krnc
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
          this.cadena = ''
          this.criptoCadena = cadena
          this.clave = clave 
          let aCadena = this.criptoCadena.split('')
          for (const letra of aCadena) {
            const numLetraCodificada = letracharCodeAt(0) - this.clave
            const letraCodificada =  String.fromCharCode(numLetraCodificada)
            this.criptoCadena += letraCodificada     
            }
      }

      descriptarBruto(cadena) {
        for (let i = 0; i < 10; i++) {
             this.descriptar(cadena, i)
             console.log(i, this.cadena)
        }
      }

   }
       
 
  

 class Enigma2 {
    constructor() {
    }

    static encriptarShort(cadena = '', clave = 0) {
      return cadena
      .split('')
      .map(letra => String.fromCharCode(letra.charCodeAt(0) + clave))
      .join('')
    }
        
    static encriptar(cadena,clave) {
        let criptoCadena = ''
        let aCadena = cadena.split('')
        for (const letra of aCadena) {
             const numLetraCodificada = letra.charCodeAt(0) + clave
             const letraCodificada = String.fromCharCode(numLetraCodificada)
             criptoCadena += letraCodificada
          }
          return criptoCadena
       }

      static descriptarShort(criptoCadena, clave) {
          return(this.encriptarShort(criptoCadena, -clave))
      }
 
      static descriptar(criptoCadena, clave) {
         return(this.encriptar(criptoCadena, -clave))
      }
     
      static descriptarBruto(cada) {
         for (let i = 1; i <= 10; i++) {
              console.log(i, this.descriptar(cadena, i))  
           
           }
       }
   }

  {
    let cadena = 'Hola Pepe'
    let cripto = Enigma2.encriptar(cadena, 10)
    console.log(cripto)
    console.log(Enigma2.descriptar(cripto, 10))

    cadena = 'Hola amigo Pepe'
    cripto = Enigma2.encriptarShort(cadena, 8)
    console.log(cripto)
    console.log(Enigma2.descriptarShort(cripto, 8))
  } 