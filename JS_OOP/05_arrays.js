
let ob = {} // new Object()
let aDatos = [2, 8, 9, 76] // new Array()
//aDatos[aDatos.length] = 67
//aDatos[aDatos.length] = 56
aDatos.push(87)

aDatos[100] = 9
// console.log(aDatos[78])

/** Funcion randomArray                        
 * @description:  Funcion que devuelven un array de n nùmeros aleatorios
 *               enteros y positivos menores o iguales a 100
 * @param {number} n
 * @returns {array}
 * 
 */
 

 function randomArray(n = 0) {
     const r = []
    
       for (let i = 0; i < n; i++) {
            r[i] = parseInt( Math.random() * 100)    
      
    }
    return r
 }

console.log(String(randomArray(65)))


/*****************************************************************/

/** Funcion formatoDni
 * @description dar formato número al DNI
 * @param {number | string} dni
 * @returns {number}
 * 
 */

 function formatoDni(dni) {
    if(typeof dni === 'number') {
        return dni
    }
    let cadenaDNI = ''
    for (let i = 0; i < dni.length; i++) {
        const caracter = dni[i];
            if(caracter != ' ' && !isNaN(caracter)) {
                cadenaDNI += caracter
            }

    }
    return Number(cadenaDNI) 
 }

 

/** Funcion letraDni
 * @description calcular la letra dni
 * @param {number | string} dni
 * @returns {string}
 * 
 */

  function letraDni(dni) {
     const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'] 
     return  aLetras[formatoDNI(dni)%23]
  }













