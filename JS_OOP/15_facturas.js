/* 
Definir la estructura de un objeto que almacena una factura. 

Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de dactura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/

const {fechaEspañola, fijarLongitudCadena} = require('./15_helpers.js')

         
const templateFactura = {
    empresa: {
       nombre:'',
       direccion: ' ',
       telefono: '',
       NIF: '',
  },             
  Cliente: {
    nombre:'',
    direccion: '', 
    telefono: '',
    NIF:'',
  },
items : [
    {description: '',precioU: 0, cantidad: 0}
  ],
 numFactura: '',
 tipoIVA: '',
 formaPago: '',
 fecha: new Date()
  }

  templateFactura.calcularImporte = function() {}
  templateFactura.mostrarImporte = function() {}



         
const factura = {
       empresa: {
          nombre:'Bellas Artes Jeco',
          direccion: 'c/ Pelayo 38, Madrid',
          telefono: '913199690',
          NIF: 'J-66273827',
  },             
  Cliente: {
    nombre:'Alberto',
    direccion: 'c/ Agustin Lara 69, Madrid', 
    telefono: '744172153',
    NIF:'A-46625137',
},

items : [
   {descripcion:'COTMAN acuarela tubo 8 ml', precioU: 3 , cantidad: 12 },
   {descripcion:'VAN GOGH óleo 60 ml', precioU: 5 , cantidad: 20 },
   {descripcion:'Bloc acuarela Guarro 240 grs', precioU: 25 , cantidad: 4 },
   {descripcion:'Bloc para óleo Rembrandt', precioU: 10 , cantidad: 8 }], 
numFactura:'000000012',
tipoIVA:0.04,
formaPago:'Contado',
fecha: new Date()
}

templateFactura.calcularImporte = function() {
    const importe = {}
    importe.base =
        this.items
        .map( material => material.precioU * material.cantidad)
        .reduce((total, item) => total + item )
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}


factura.listarItems = function() {
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

factura.prepararFactura = function() {
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

factura.render = function() {
    console.log(this.prepararFactura())
}


factura.render()
