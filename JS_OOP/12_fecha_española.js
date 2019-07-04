const {aDias, aMeses} = require('./12_datos.js')

 const capitalize = (cadena = ' ') => 
       cadena[0].toUpperCase() + cadena.slice(1)

/** funcion fechaEspañola()
 * @description: devuelve como  
 * "dia de la semana" y "dia de mes del año"
 * @author Hitomi Aoki
 * @param {date | string} fecha 
 * si es string, debe respetar el estandar ISO
 * @external aDias, aMeses
 * @returns {string}
 */


   const fechaEspañola = (fecha = new date() ) => {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha)
    }
    const nombreDia = capitalize(aDias[fecha.getDay()] )
    const dia = fecha.getDate()
    const mes = capitalize(aMeses[fecha.getDay()] )
    const año = fecha.getFullYear()
    return `${nombreDia}, ${dia} de ${mes} del ${año}`
}


const fechaEspShort = (fecha = new date() ) => {
    fecha = (typeof fecha === 'string') ? new Date(fecha) : fecha
    return aDias[fecha.getDay()] + ', '
       + fecha.getDate() + ' de '
       + aMeses [fecha.getMonth()] + ' del '
       + fecha.getFullYear() }


 let f = new Date(1997,9,26)  
 f = '1997-9-26'
 console.log(fechaEspañola(f)) 
 console.log(fechaEspShort(f))    


