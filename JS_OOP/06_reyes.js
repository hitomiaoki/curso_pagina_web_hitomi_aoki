

{  
    
const aReyes = ['Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos']

function isNombreRey(nombre) {
      
      for (let i = 0; i < aReyes.length; i++) {
       const item = aReyes[i];
       if (  nombre.toUpperCase() == item.toUpperCase()) {
           return [true, i] 
        }
    }
      return [false]
 }

function  mostrarIsRey(nombre) {
      let [isRey, position] = isNombreRey(nombre)
      let mensajes = [
          `El nombre ${nombre.toUpperCase()}, no ha sido usado por ningun rey de España`,
          `El nombre ${nombre.toUpperCase()}, ha sido usado por ningun rey de España
           y es el número ${++position} de la lista`,
      ] 
      console.log( mensajes[+isRey])
}

//mostrarIsRey('Fernando')
//mostrarIsRey('Federico')

console.log(aReyes.indexOf('Fernando'))
console.log(aReyes.indexOf('Amadeo'))
console.log(aReyes.indexOf('Federico'))

//ES 2016 (ES7)
console.log(aReyes.includes('Fernando'))
console.log(aReyes.includes('Ramon'))
} 


