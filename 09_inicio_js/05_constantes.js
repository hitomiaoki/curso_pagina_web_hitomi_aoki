//una variable que va cambiando su valor
let a = 4
console.log(a)
a = 5
console.log(a)
a = 6
console.log(a)
a = 574
console.log(a)

//ES6
//const solo para un valor, no añade mas.
const b = 6
//ERROR b = 22

//así este dentro de otro bloque, la constante solo hay una.
/*if (true) { //ESTO NO ESTA DEFINIDO
  b = 10  
  
}*/


if (true) {
    const c = 7  
    console.log(b)//6
    //console.log(c)//7
}

console.log(b)//6
//console-log(c) error

////////////

//let datos = [22,67,36]
//let persona = {nombre:'Pepe' , edad:'22'}

const datos = [22,67,36]
const persona = {nombre:'Pepe' , edad:'22'}

// datos = 3 error por la propiedad const

datos[datos.length] =63
datos.push(43)

// datos = 3 // Error
// datos = []
// datos [22,10,36,63,43]


persona.altura = 178
persona.edad = 23
persona.nombre = ''
delete persona.nombre
persona.nombre = ''
//persona.nombre = '' //Solo aparecería nombre, no valor
//delete persona.nombre //Borrar nombre y el valor


// persona = 178 ERROR
//persona = {}
//persona = {nombre:'Pepe', edad:22}

// console.log(datos[0]) // los datos (números) se cuentan desde 0
console.log(datos)
// console.log(persona.nombre)
console.log (persona)


