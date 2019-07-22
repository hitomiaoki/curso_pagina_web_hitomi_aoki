/**
 * crear un programa para analizar frase:
 *  número de palabras
 *  longitud media de las palabras
 *  veces cada letra
 *  fruencia cada palabra
 * 
 *  @param {string}
 * @param {string}
 * @returns
 */

  function numPalabras(frase = '') {
     return frase.split('').length
  }
  
  function numLetras(frase = '') {
   return frase.split('').join('').length
  }

   
 function longMedia(frase = '') {
    return numLetras(frase) / frase.split(' ').length
 }
 
 /*
  let array = frase.split('')
  let i = 0
  array.forEach(item => {
     i += item.lenght
  });
  return i / array.lenght

  return array.map(item => item.lenght)
     .reduce(a,b => a+b) / array.lenght
}*/

 const cadena = 'Hola amigos como estais'
 console.log(numPalabras(cadena))
 console.log(longMedia(cadena))



function vecesCadaLetra(frase = '') {
    const vecesLetras = {
       A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0,
       N: 0, Ñ: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, X: 0, T: 0, Z: 0 
}  
// limpiar frase 

for (const item of frase.split('').join('').toUpperCase()) {
     console.log(item)
     vecesLetras[item]++
  }

   return vecesLetras

}


function frecuencia(frase = '') {
    let num = numLetras(frase)
    let r = vecesCadaLetra(frase)
    for (const key in r) {
        r[key] /= num /100
    }
    console.log(r)
}
 
vecesCadaLetra(cadena)
frecuencia(cadena)



