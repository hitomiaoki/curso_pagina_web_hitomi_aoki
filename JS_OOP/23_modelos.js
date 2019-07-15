
const {fechaEspañola, fijarLongitudCadena} = require('./15_helpers.js')


function Factura(
    empresa = {},
    cliente = {},
    items = [{}],
    numFactura,
    tipoIVA,
    formaPago,
    fecha = new Date()) {
  this.empresa = empresa
  this.cliente = cliente
  this.items = items
  this.numFactura = numFactura
  this.tipoIVA = tipoIVA
  this.formaPago = formaPago
  this.fecha = fecha
}


function Empresa(nombre,direccion,telefono,nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}


function Item (descripcion, precioU ) {
     this.descripcion = descripcion
     this.precioU = precioU
     


}

function Compra (item)



function Direccion(calle,num,poblacion,pais) {
    this.calle = calle
    this.num = num
    this.poblacion = poblacion
    this.pais = pais  
}
Direccion.prototype.toString= function()  {
    return `${this.calle} ${this.num}  ${this.poblacion}  ${pais}`
}






Factura.prototype.calcularImporte = function() {
    const importe = {}
 importe.base =
     this.items
     .map( material => material.precioU * material.cantidad)
     .reduce((total, item) => total + item )
 importe.iva = importe.base * this.tipoIVA
 importe.total = importe.base + importe.iva
 return importe
}

Factura.prototype.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocaleString( 'es', {style: 'currency', currency:'EUR'})
            let cant = item.cantidad
            items +=
`
    ${desc}     ${pv}          ${cant} 

 `           
    })
    return items

}



Factura.prototype.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =

    `
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}
    Num. Factura: ${this.numFactura}

    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}
    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}
    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Forma de Pago ..............................${this.formaPago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
   return factura
}

Factura.prototype.render = function() {
    console.log(this.prepararFactura())
}

Factura.prototype.resumir = function() {
    console.log(
   `Factura: ${this.numFactura}`     
    )
}

module.exports = {}
module.exports.Factura = Factura
module.exports.Empresa = Empresa
module.exports.Item = Item
module.exports.Direccion = Direccion