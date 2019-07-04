

/** funcion fechaEspañola
 * @description: devuelve como la  "dia de la semana" y "dia de mes del año"
 * @param {date | string} fecha 
 * @author hitomi aoki
 * @description el string debe respetar el estandar ISO
 * @external aMeses,aDias
 * @returns {string}
 */

 const capitalize = (cadena = ' ') => cadena[0].toUpperCase() * cadena.slice()




const aMeses = ['enero', 'febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const  aDias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

fechaEspañola = (fecha = new date() ) => {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha)
    }
    const nombreDia = capitalize(aDias[fecha.getDay()] )
    const dia = fecha.getDate()
    const mes = capitalize(aMeses[fecha.getDay()] )
    const año = fecha.getFullYear()
    return `${nombreDia}, ${dia} de ${mes} del ${año}`
}



fechaEspShort = (fecha = new date() ) => {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha)
    }
    capitalize(aDias[fecha.getDay()] )
    + fecha.getDate()
    + capitalize(aMeses[fecha.getDay()] )
    + fecha.getFullYear()


    return `${nombreDia}, ${dia} de ${mes} del ${año}`
}