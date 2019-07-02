let aDatos = ['perro', 'gato']
aDatos.length


// Implementadas como inmutables
console.log(aDatos.concat(['leon', 'tigre']))
console.log(aDatos)


// Implementadas con mutables
aDatos.sort()
console.log(aDatos)

let aNumbers = [32, 3, 2, 21, 56, 5, 9]
let aNumbersOriginal = aNumbers.slice()

aNumbers.sort((a,b) => b-a)
console.log(aNumbers)
console.log(aNumbersOriginal.reverse())
console.log(aNumbersOriginal)