'user strict'

function ejemplo () {

let v = 160
let a = 4
let modelo = 'RAV'
let marca = 'Toyota'

let coche ={ //colecciones de propiedades con nombres --> object
v :160,
a :4,
modelo:'RAV',
marca:'Toyota',
usuarios:['Pepe','Elena','Rosa']
}

//array [], lista, arreglo
let aDatos = [2,4,6,7,37] //arrive

console.log(coche)
console.log(coche.marca)
}


ejemplo ()
//Objecto JSON o literal

let persona = {
 fullNombre : {
  
 nombre:'Pepe',
 apellido:'Perez',
   
 },
 
 edad : {

    valor : 20,
    unidad : 'años'
 },

 altura:178,
 isMujer:false,
 formacion: 'ingeniero',
 aficiones:['leer','bailar','programar'],

}


console.log(persona)