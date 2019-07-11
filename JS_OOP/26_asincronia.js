
const respuestas = [
   '',
   [ 'Esto es un mensaje',3],
   ,
   ['construido a cachitos',6],
   ,
   ,
   ['mediante la lectura secuencial',7],
   ['de varios de items de un array', ]

]



function leerDatosAsinc(i, timer = 1000, callback) {
   return setTimeout (
      () => {
         console.log(`lectura de datos número ${i}`)
         callback(respuestas [i])
     }, timer)  
    
    
     
}

 let i = 1
 leerDatosAsinc( i, 2000, (datos) => {
       console.log(datos[0])  
    i = datos[1]
      
    leerDatosAsinc(i, 3000, (datos) => {
        console.log(datos[0])
        i = datos[1]
    
      leerDatosAsinc(i, 2000, (datos) => {
         console.log(datos[0])
         i = datos[1]

        leerDatosAsinc(i, 1000, (datos) => {
           console.log(datos[0])
           i = datos[1]

    
         })
   
      })

   })

})

    
console.log('Leyendo los datos')


