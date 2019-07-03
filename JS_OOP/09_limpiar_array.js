
/** Funcion limpiaArray
 * @description devuelve de un array  eliminando los nombres 
 * que empienza por una letra determinada del array que recibe
 * @param {string}: letra
 * @param {array}: aNombres
 * @returns {array}
 * 
*/

function limpliarArray(letra = '', aNombres = []) {
    const datos = aNombres.slice()
    for (let i = 0; i < aNombres.length; i++) {
        const item = aNombres[i];  
    if (item[0].toLowerCase() === letra.toLowerCase()) {
        aNombres.splice(i, 1)
        i--
      } 

    } 
    return datos
}

let i = 'r'
let aUsuarios = ['rosa', 'raquel', 'elena', 'marta','ramon', 'maria', 'roberto']

console.log(limpliarArray('letra',aUsuarios))
console.log(aUsuarios)


//PARAMETROS y ELEMENTALES

function algo(h) {
    h = h * h
    return h 
}

let z = 4
algo(z)
console.log(z)


// PARAMETROS y REFERENCIAS

function Cuadrados(a) {
 for (let i = 0; i < a.length; i++) {
    a[i] = a[i] * a[i]  
  }
  return a //  [1, 4, 9] 
}

let x = [1, 2, 3]
cuadrados(x)
console.log(x)