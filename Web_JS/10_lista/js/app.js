 export function app() {
    
     // Existe un input #in-new
     // Existe un elemento #out-lista

    let animales = []
     // ¿Existe estorage? 
    if(localStorage.getItem('zoo')) {
        animales = JSON.parse(localStorage.getItem(animales))
    }
   
    // let animales = (localStorage.getItem(animales))
    //        localStorage.getItem(animales)


    // Nodos
    let inAnimal = document.querySelector('#in-new')
    let outAnimal = document.querySelector('#out-lista')

    // Asignación manejador de eventos /seria con un solo manejador/
    inAnimal.addEventListener('change', addAnimal)

    //Función
    function addAnimal() {
         animales.push(inAnimal.value)
         localStorage.setItem('zoo', JSON.stringify(animales))
        
    }

    function render() {

        let html = ''
        html += '<ul>'
        animales.forEach(item => html += `<li> ${item} </li>`)
        html += '</ul>'
        outAnimal.innerHTML = html
    }

}





