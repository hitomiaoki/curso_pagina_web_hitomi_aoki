let aDatos = ['perro', 'gato']
aDatos.length


// Implementadas como inmutables
console.log(aDatos.concat(['leon', 'tigre']))
console.log(aDatos)


// Implementadas con mutables
aDatos.sort()
console.log(aDatos)

const aNumbers = [32, 3, 2, 21, 56, 5, 9]
// creamos un clon de array
const aNumbersOriginal = aNumbers.slice()

aNumbers.sort( (a,b) => a-b)
console.log(aNumbers)
console.log(aNumbersOriginal.reverse())
console.log(aNumbersOriginal)


let nombres = ['Luis','Rosa','Juan','Sofia','Julia','Ramon']


// Fraccionar arrays : inmutable
let seleccion = nombres.slice(1, 3)
console.log(seleccion)
console.log(nombres)

//CLONAR
let clon = nombres.slice()


// Fraccionar array :  mutable

let eliminados = nombres.splice(1, 3, 'pedro', 'ernesto')
console.log(eliminados)
console.log(nombres)


// splice para añadir

let paises = ['francia', 'italia', 'hungria', 'holanda']
console.log(paises.splice(2, 0, 'españa' ))
console.log(paises)

// Pilas y colas

// PILA -> stack Filo 
//(push)la ultima posicion en quien entra) -Importante-
//(pop)quita al final

console.log(paises.push('portugal', 'alemania'))
paises.pop()
console.log(paises)


// COLAS -> heap FIFO 
//(unshift) inserta un nuevo elementos al principio
//(shift) elimina el primer elemento del array y devuelve dicho elemento

paises.unshift('croacia')
console.log(paises)
paises.shift()
console.log(paises)