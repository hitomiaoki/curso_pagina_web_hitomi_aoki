
const respuestas = [
   '',
   "Esto es un mensaje",
   "construido a cachitos",
   "mediante la lectura secuencial",
   ""

]




function leerDatosAsinc(i, timer = 1000, callback) {
   return setTimeout (
      () => {
         console.log(`lectura de datos número ${i}`)
         callback(respuestas [i])
     },  
     timer)
    
     
}

 leerDatosAsinc(
    1, 2000, (datos) => (console.log(datos) ))
       
    
console.log('Leyendo los datos')




