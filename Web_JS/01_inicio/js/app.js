console.log('Cargando app')

function saludar() {
    console.log('Hola, desde una funcion')
}

console.log(document)
console.dir(document)

document.querySelector('#btn-super').onclick = saludar