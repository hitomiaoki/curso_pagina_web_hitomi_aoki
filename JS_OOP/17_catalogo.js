

/* 
  crear un objeto usado para representar
  un articulo de una tienda.
  -  una descripcion
  - un código
  - un precio
  Métodos
  - permitir el calculo de su comportamiento IVA
  - mostrar los datos por pantalla.
  
 */

 /** Function (Class) Libro
  * @property {string} descripcion 
  * @property {string} codigo 
  * @property {number} precio 
  * @property {number} iva
  * @method {object} calcularIVA
  * @method {void} mostrar
  */


  function Libro(descripcion = '', codigo = '', precio = 0) {
       this.descripcion = descripcion
       this.codigo = codigo
       this.precio = precio
    }

    Libro.prototype.iva = 0.04
    Libro.prototype.calcularIVA = function ( descuento = 0) {
      const precio = this.precio - (this.precio * descuento)
      return {
       iva:  precio * this.iva, 
       total: precio + (precio * this.iva) 
      }  

    }
    Libro.prototype.mostrar = function(descuento) {
        const {total, iva}= this.calcularIVA(descuento)
        const cadena = `
        Description: ${this.descripcion}
        Codigo: ${this.codigo}
        Precio: ${this.precio.toFixed(2)}
        IVA: ${iva.toFixed(2)}
        Precio Total: ${total.toFixed(2)}
        `
        console.log(cadena)
    } 
     
     
       


  const l1 = new Libro('Las ranas', '00345Y4', 22)
  l1.mostrar(0.1)
  console.log(l1)
  const l2 = new Libro('Los sapos', '0034527', 22)
  l2.mostrar()
  console.log(l2)
  const l3 = new Libro('Promo Empresa', '0034527', 10)
  l3.iva = 0.12
  l3.mostrar()
  console.log(l3)









