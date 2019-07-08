

/**
 *  articulo
 *  descripcion
 *  codigo
 *  precio
 *  calculo 
 *  iva
 * 
 */

  
 const producto = {
    articulo: 'materiales arte',  
 }
 items : [
   {descripcion:'COTMAN acuarela tubo 8 ml', precioU: 3 , cantidad: 12 },
   {descripcion:'VAN GOGH óleo 60 ml', precioU: 5 , cantidad: 20 },
   {descripcion:'Bloc acuarela Guarro 240 grs', precioU: 25 , cantidad: 4 },
   {descripcion:'Bloc para óleo Rembrandt', precioU: 10 , cantidad: 8 }], 
numFactura;'000000012',
tipoIVA;0.04,
formaPago;'Contado',
fecha; new Date()
 
    producto.calcularImporte = function() {
    const importe = {}
    importe.base =
        this.items
        .map( articulo => articulo.precioU * material.cantidad)
        .reduce((total, item) => total + item )
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}