


function leerDatosAsinc(i, timer = 1000, callback) {
   return setTimeout (
      () => {
         let datos 
         console.log(`lectura de datos número ${i}`)
         datos = {data: 'Muchos datos'} 
         callback(datos)
         leerDatosAsinc(2, 1000, () => console.log(datos.data.toUpperCase() 
         ))
     },  
     timer)
    
     
}

 leerDatosAsinc(
    1, 2000, (datos) => console.log(datos.data.toUpperCase()
       )
    )
console.log('Leyendo los datos')




