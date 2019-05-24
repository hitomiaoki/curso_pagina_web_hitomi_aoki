

'user Strict'

//variable de un "ámbito (scope) global"

var antes =2
let a = 2


function prueba (){
//una variable un ' ámbito local' a la función
var int = 3 
let i = 6
let b = 9

if (true){

//una variable un ' ámbito local' a la función
    var i = 6
// una variable de ámbito local al bloque if
    let b = 7

console.log('Es verdad') 
console.log ('Desde el if,a') // 2 //local
console.log ('Desde el if,b') // 9 //local
console.log ('Desde el if,a') // 7 //local
}  


console.log ('Desde la función,a') // 2
console.log ('Desde la función,b') // 9
//console.log ('Desde el if,a') // 7
}


// c = 3 daría un error debido el use strict

console.log ('Desde el programa,b') // 2 //local
console.log ('Desde el programa,a') // 4 //local

let v = 45

function ejemplo (){
 let v = 3
 if (true) {
    let v = 3
    console.log(v)
 }
}

function sample () {
console.log (v)  
}

ejemplo()
sample()
