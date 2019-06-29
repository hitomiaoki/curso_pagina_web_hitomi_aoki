/*function calcular(a, b, operacion, callbacks) {
    let msg = `El resultado de un/a ${operacion} con ${a} y ${b} es `
    return msg + callbacks(a,b)
}*/



calcular = (a, b, operacion, callbacks) => {
    let msg = `El resultado de una ${operacion} con ${a} y ${b} es `
    return msg + callbacks(a,b)
}


function producto (a,b) {return a*b}

console.log(calcular(4,6,'suma',  (x,y) => x + y))
console.log(calcular(4,6,'resta',  (x,y) => x - y))
console.log(calcular(4,6,'producto', producto))