

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


 export function ComprobarDNI(cadena) {

     const letraUser = cadena [cadena.length -1]
     const letraCalculada = letraDni(cadena)
     return (letraUser.toUpperCase === letraCalculada.toUpperCase())
 }









