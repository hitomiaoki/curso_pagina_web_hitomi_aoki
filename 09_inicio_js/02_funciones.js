'use strict'

//undefined
//boolean
//number (int,float)
//string
//object


//Declaración de la función
function sample () {
 //ES6
/*let saludo  = ''//Esto se llama una variable --> tipo sea undefined
saludo = 'hola' incicializar la variable*/
//let user= 'Pepe'//Declarar + inicializar (tipo string)
let saludo= 'hola'

//MALA PRÁCTICA
// curso= 'JavaScript' //Inicializar la variable 

console.log(saludo)   
}

//let saludo = 'Hello'

function saludar (nombre = 'amigo') {
    let saludo= 'hola'
    console.log(saludo + nombre)//Es conocido como un parámetro --> nombre ->undefined    
}


//Invocación o ejecución uso de una función
saludar('Pepe')
saludar('Elena')
saludar()
//console.log(saludo)



//SEPARACIÓN DE REPONSABILIDAD  O INTERESES (separation of concerns - Edsger W. Dijkstra)


/**
 *JSDOc 
 */

 
/**
 * 0/4 = 0
 * 4/0 = Infinito
 * 
 * 0/0 = Indetermiación -->NaM
 */


/**
 *Función sumar
 * @description recibe 2 parámetros y devuelve la suma de ambos
 * @param {number}
 * @param {number}
 * @returns {number}
 *  
 * función pura
 */
 function suma ( a =0, b = 0) {
/*
   let c = a + b
   return c*/
   return a + b
}


  /** Función restar
   *@description {number} recibe 2 parámetros y devuelve la resta de ambos
   *@param {number} a
   *@param {number} b
   *@returns {number}
   */

  function resta(a = 0, b = 0) {
    return a - b
      
   }


  /**
   *@param {number} a
   *@param {number} b
   *@returns {number} 
   */

  
  function multiplicar(a = 0, b = 0) {

    return a * b
      
   }


/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function dividir(a = 0, b = 1) {
  return  a / b
    
 }


/** Función Mostrar
 * @description Recibe un texto y lo saca por pantalla
 * @param {string / number}
 * @returns {void}
 * 
 * función interfaz
 */
 function mostrar (cadena = '') {
  console.log(cadena)   

 }


  function probar() {
 
     let x = 2
     let y = 3
     mostrar(suma(x,y))
     mostrar(suma(x))
     mostrar(suma(undefined,y))
     mostrar(suma())
     mostrar()
     mostrar(resta(x,y))
     mostrar(multiplicar(x,y))
     mostrar(multiplicar(x,'Pepe'))
     x = 4
     y = 2
     mostrar(dividir(x, y))
     mostrar(dividir(x))
     mostrar(dividir(undefined,2))
    
  }

   probar() 