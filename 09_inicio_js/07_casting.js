'use strict'

//operaciones con numbers
let x = 2
let y = 3
let z = x * y

//operaciones con numbers y strings
y = '3'
z = x * y //durante de la operación Number(y)
x = '5'
z = x * y

console.log(z,typeof z) // number
console.log(x,typeof x) // string
console.log(y,typeof y) // string

/* sobrecarga del símbolo +
+3
"Hola" + "Pepa"
2+2 */

let saludo = "Hola" + "Pepa"

let w = x + y // No da 8, da '53'
console.log(w,typeof w)

x = 23
y = '20'
 w = x + y // da '2320'
 w = w * 1
console.log(w,typeof w)


/**
 * Not !
 * Or ||
 * And &&
 */


function sumar (a = 0, b = 0) {
    /*if (typeof a != 'number'|| typeof b != 'number')
    return  'No se puede sumar' 
    } */ 
    if (isNaN (a)  || isNaN (b) 
    || typeof a == 'boolean' || typeof b =='boolean'
    || typeof a == 'object'  || Array.isArray(b)) {
    return  'No se puede sumar' 
    }
    //let r = Number (a)+ Number (b)
    //let r = parseFloat(a) + parseFloat (b)
    let r = Number +a + +b
    return  'La suma es' + r
}
