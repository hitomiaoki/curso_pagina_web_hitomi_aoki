
/*function calcularsc(x , y) {
   console.log(arguments)
   return (x*x) + (y*y)

}*/

/*calcularSC(2,4)  // 20

let a = 2
let b = 4
calcularSC(a, b)  // 20

let x = 2
let y = 4
calcularSC(y, x)  // 20*/


//console.log(calcularSC(y, x)) // 20
//console.log(calcularSC('pepe', 'juan')) // NaN

//console.log(calcular(y) )
//console.log(calcular() )

//console.log(calcularSC(4,'pepe',8,4,3))

/**
 * 
 * @param  {array} aDatos 
 * @returns {number}
 */


function calcularSC(...aDatos) {
     let r = 0
     let aCuadrados = []
     console.log(aDatos)
     for (let i = 0; i < aDatos.length; i++) {
     const item = aDatos[i];
     let x = item * item
     aCuadrados.push(x)
     r += x 
  } 
  //return [r, aCuadrados] 
   return{sumaTotal: r, aCuadrados:aCuadrados}
}

//let sumaTotal
//let aCuadrados
//let aResultados = calcularSC(1, 5, 7, 8)
//sumaTotal = aResultados[0]
//aCuadrados = aResultados[1]

//let [sumaTotal, aCuadrados] = calcularSC(1, 5, 7, 8)
return {aCuadrados, sumaTotal} = calcularSC(1, 5, 7, 8)

console.log(sumaTotal)
console.log(aCuadrados)

