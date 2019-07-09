
/*

  funcion triangulo 3 propiedades:

  - lado1
  - lado2
  - lado3

  3 metodos incluido prototipo

  -getLados
 - getPerimetro
  -getTipo

  devuelve
  equilatero,
  isosceles 
  escaleno
  

 Creamos 3 objetos
 un triangulo de cada tipo
 presentamos por pantalla
 */



 




 function Triangulo (l1, l2, l3) {
  this._l1 = l1  
  this._l2 = l2
  this._l3 = l3
    
 }

 Triangulo.prototype.getLados = function () {
     return this
 }

 Triangulo.prototype.getPerimetro = function () {
     return  this._l1 + this._l2  + this._l3 
     
    
 }


 const t = new Triangulo(3,8,3)
 //console.log(t._l1 + t._l2 + t._l3)
 console.log(t.getPerimetro())
 


 

