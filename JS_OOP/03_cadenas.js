'use strict'

let version = 'ES6'

let cadena = "Esto no es buena práctica"
let otraCadena = 'Es mejor usar comillas simples'
let nuevaCadena =`Nuevo en ${version}`// Template string

console.log(cadena, otraCadena, nuevaCadena)
console.log(cadena.toUpperCase())



console.log(cadena.length)
console.log(cadena[0])

for (let i = 0; i < cadena.length; i++) {
    const item = cadena[i];
    console.log(item)
}


 /*let x = cadena.split(' ')
 console.log((x[3] + ' ' + x[4]).toUpperCase())*/

 let x = cadena.split(' ').join('').toUpperCase()
 console.log(x)


 /*cadena.slice(inicio, final)
 cadena.substring(inicio, final)
 cadena.substr(inicio, desplazamiento)

 cadena.match()
 cadena.search()
 cadena.replace()

 cadena.indexOf(clave)
 cadena.lastIndexOf(clave)

 cadena.charAt(posicion) // cadena(position)
 cadena.charCodeAt(posicion)

 String.fromCharCode(number)*/


 let numero = 23.7865432
 console.log(numero)
 console.log(numero.toString())
 console.log(numero.toFixed(2))
 console.log(numero.toPrecision(4))
 numero = 0.0000000000021764894
 console.log(numero.toExponential())
 console.log(numero)
 numero = 23.7865432
 console.log(numero.toLocaleString)