const { aDias, aMeses} = require('./12_datos.js')

const capitalize = (cadena = '') =>
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

function fijarLongitudCadena(cadena = '',lon = 0) {
    if (cadena.length > lon) {
        // añadir espacio
        const espacios = lon - cadena.length
        for (let i = 0; i < espacios; i++) {
             cadena += '';
        }    
    } else if (cadena.length > lon) {
        // truncar
        cadena = cadena.slice(0, lon-3) + '...'
    }
    return cadena
}


module.exports = {}
module.exports.fechaEspañola = fechaEspañola
module.exports.fijarLongitudCadena = fijarLongitudCadena