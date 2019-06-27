'use strict'

/* Declaracion de funciones */
           
 /** sumaRaices
  * @param {number} a 
  * @param {number} b 
  * @description {number}
  */


function sumaRaices(a = 0, b = 0) {
    let r = Math.sqrt(a) + Math.sqrt(b)
    return r
}

/* Asignacion de funciones */ 

let x = {}
let user = {user: 'pepe', edad:33}
let restaRaices = function (a=0, b=0) {
    return  Math.sqrt(a) - Math.sqrt(b)
}   

console.log(sumaRaices(6, 7))
console.log(restaRaices(6,7))


/* ES6: Asignacion de funciones ARROW o  */ 

/*let productoRaices = function (a = 0, b = 0)  {
    let r = Math.sqrt(a) * Math.sqrt(b)
}*/

/*let productoRaices = (a = 0, b = 0) => {
    let r = Math.sqrt(a) * Math.sqrt(b)
}*/


let productoRaices = (a = 0, b = 0) =>  Math.sqrt(a) * Math.sqrt(b)

let mediaMal = a => Math.sqrt(a)//2

   