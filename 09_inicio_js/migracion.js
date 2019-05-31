'use strict'

/* Datos

-Indefinidos
  -undefined
-primitivos
   -number
   -string
   -boolean
-Referenciados :
   -objects
          - Array
          - Dato
          - Error
          - RegExp
          - Math
          - JSON
          - Function
*/

/* Variables

  - Tipo : débiles ( implícitos al valor) y dinámicos
  - Ciclo de vida
         - declaración : inicialización : asignación
*/

let x = 34 // declaración = inicialización
//....
//....
x = 45 // asignación
x = x * 2 // asignación por expresiones


/*Ambito
   - global
   - local
       - al bloque => let / const
       - a la función => var
*/

let a = 31 // global
console.log('variable global', a)

///////////////////////////////////////////

function prueba() {
  let a = 12 // local a la función
  console.log('variable local a la función', a)

  console.log('z vale', z)
  var z = 7
 if (true) {
  let a = 78 // local al bloque 
  var z  = 23 
  console.log('variable local al bloque', a)
  console.log(b)
 }
 console.log (z) 
}

prueba()

/*Constantes
    - Ciclo de vida : declaración + inicialización  
*/

const IVA = 1.26
// IVA = 1.34 // -> DA ERROR

/*Constantes referenciadas -> es constante la referencia */

const user = {nombre :'Pepe', edad : 34}
user.nombre = 'Juan'
user.edad = 32
console.log(user)
//user = {nombre : 'Juan', edad : 32} -> Error
//user = 34 -> Error
user.log(user)

function izar() {
    var z
    console.log('Izado')
    console.log('z vale', z)
    var z = 7   
}

//hoisting de funciones declaradas y variables var (solo la declaración)
/*lo que pasa realmente
function izar() {
    var z
    console.log('Izado')
    console.log('z vale', z)
    var z = 7   
}*/

/** Casting
 * Cambio de tipo temporal durante una operación
 */

 // Casting a string
 let n = 23
 let msj = 'Juan tiene' + n // 'Juan tiene 23'
console.log(typeof n)

// Casting a number
let indice = '34'
let incremento = indice * 0.10

// Casting a boolean

let w

// Falsy
w = False
w = undefined
w = null
w = 0
w = NaN
w = ''

//True
w = true
w = 23
w = -34
w = ' '
w = 'Pepe'
w = {}
w = []


if (w) {}

// Operadores
// Ariméticos: + - * / %

