console.log('Hola amigo')

//DATOS

//Tipos primitivos

undefined// Tipo undefined
20 // Tipo number
'Alejandro' // Tipo string
true //Tipo boolean

//Tipos complejos o referenciados

//{nombre:'Pepe', edad:27} Tipo objeto

//Los lenguajes pueden ser de este tipo:
// Tipado fuerte o débil  
// Tipado estático o dinámico


// en Java o #C el tipado es fuerte y estático
//a:int//Tipo iny, sin valor
//a = 3
//a = 'Pepe' // Error de tipos


// JS es tipado débil y dinámico

let a
console.log(a)
console.log(typeof a)// undefined
a = 2

console.log(a)
console.log(typeof a)// number
a = 23

console.log(a)
console.log(typeof a)
a = 'Pepe' //"Pepe"
 
console.log(a)
console.log(typeof a)//string

a = false
console.log(a)
console.log(typeof a) //boolean
a = {nombre:'Pepe', edad:27}

console.log(a)
console.log(typeof a)//Object
a = [1,2,3]


console.log(a)
console.log(typeof a)//Object

a = [

    {nombre:'Pepe', edad:20}, 
    
    {nombre:'Juan', edad:26},
    
    {nombre:'Elena', edad:27}

]

console.log(a)
console.log(typeof a)//Object


// Uso normal de datos y variable

let precio = 45.60 //number
let producto ='Gafas' //string

let precioPrevio = precio

precio = precio * 1.06

console.log(precioPrevio, precio) //crear una sentencia


//arrive una lista indexada