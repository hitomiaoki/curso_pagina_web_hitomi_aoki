
'use strict'

//undefined
//boolean
//number (int,float)
//string
//object
//ES6

//Declaración de la función
function sample (){
 
//let saludo  = ''//
//saludo = hola //incicializar la variable
//let user= 'Pepe'//Declarar + inicializar (tipo string)
let saludo= 'hola'
//MALA PRÁCTICA
// curso= 'JavaScript' //inicializar la variable 


console.log(hola)   
}

//let saludo = 'Hello'

function saludar (nombre = 'amigo'){
 
    let saludo= 'hola'
    console.log(saludo + nombre)    
}


//Invocación o ejecución uso de una función
saludar('Pepe')
saludar('Elena')
saludar()
//console.log(saludo)






//SEPARACION DE REPONSABILIDAD  O INTERESES ()

/**
 *función suma
 * recibe 2 parametros
 * devuelve la suma de ambos
 * 
 * 
 * @param {number}
 * @param {number}
 * @return {number}
 * 
 * 
 * 
 * 
 */

//función pura
 function suma ( a =0, b = 0){

   let c = a + b
   return c
}

/**
 *función mostrar
 * Recibe un texto y lo saca por pantalla
 * 
 * @string {string}
 * @returns {void}
 * 
 */
//función interfaz
 function mostrar (mensaje) {
  console.log(mensaje)   

 }



 function dividir(a = 0, b = 1){
   return  a / b
     

 }

 

 function resta(a = 0, b = 0){

   return a - b
     
  }


  /**
   * @description {number}
   *@param {number} a
   *@param {number} b
   *@returns {number}
   * 
   * 
   * 
   * 
   */

  
 function multiplicar(a = 0, b = 0){

    return a * b
      
   }
  /**
   * @description {number}
   *@param {number} a
   *@param {number} b
   *@returns {number}
   * 
   * 
   * 
   * 
   */


  function probar(){
 
    let x = 2
    let y = 3


 mostrar(suma(x,y))
 mostrar(suma(x))
 mostrar(suma(undefined,y))
 mostrar(suma())
 mostrar(suma())
 mostrar()

 mostrar(division(4,2))
 mostrar(division(4))
 mostrar(division())
 mostrar(division(undefined,2))
 mostrar()
 mostrar(resta(x,y))
 



 mostrar(division(4,2))
 mostrar(division(4))
 mostrar(division(undefined,2))
 mostrar(resta(7,3))
  }

