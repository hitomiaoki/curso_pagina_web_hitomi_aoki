'use strict'

//valores primitivos
//(Number,string,boolean,undefined)


let a = 2
let b = a//asignación de valor
console.log('al crear b',a,b)
b = b * b
a = a / 2
console.log('valor de',b) //4
console.log('valor de',a) //1

b = a
console.log('valor de b',b)

// valores referenciados
// objects (array)
 
let p1 = {nombre :'Pepe', edad : 34}
let p2 = p1 // Asignación de referencia
p1.nombre = 'Juan'
console.log(p1) // Juan  // un objeto en 2 referencias
console.log(p2) // Juan


let  a1 = {nombre :'Raquel', edad : 34}
let  a2 = {nombre :'María', edad : 34}
let  a3 = {nombre :'Juan', edad : 34}



function inscribirmal(){
    a1.curso = 'JS'
}

function inscribirEnJS(alumno){
  if (alumno){
      alumno.curso  = 'JS'     
  }
 
}

inscribirEnJS(a1,a2,a3) // paso por referencia
inscribirEnJS(a2)
inscribirEnJS(a3)
console.log(a1)
console.log(a2)
console.log(a3)


/*let saldo = 1000
saldo = saldo * 2
function inscribirmal(){
saldo = saldo * 2
}*/

let saldo = 1000

function invertir(x) {
    x = x * 2
    return x
}

saldo = invertir(saldo) //un paso de un valor
console.log(saldo)
