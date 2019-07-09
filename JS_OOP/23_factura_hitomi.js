





function Factura(nombre,direccion,telefono,nif) {
  this.nombre = nombre
  this.direccion = direccion
  this.telefono = telefono
  this.nif = nif
}


function Cliente(nombre,direccion,telefono,nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}



Cliente.prototype = new Persona()

        
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






/*        
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

*/        











  