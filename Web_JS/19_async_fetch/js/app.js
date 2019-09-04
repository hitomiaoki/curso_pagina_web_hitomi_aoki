export function app() {
   console.log('Cargando app')
   const usersURL = 'https://jsonplaceholder.typicode.com/users'
 

    // NODOS DEL DOM
     let btnBuscar = document.querySelector('#btn-buscar')
     let btnBorrar = document.querySelector('#btn-borrar')
     let inId = document.querySelector('#in-id')
     let spanSaludo = document.querySelector('#span-saludo')


    // Asociación de manejadores de eventos
    btnBuscar.addEventListener('click', onClickBuscar2017)
    btnBorrar.addEventListener('click', onClickBorrar)
    

  // Funciones manejadores de evento
    function onClickBorrar(ev) {
        inId.value = ''
        spanSaludo.innerHTML =  inNombre.value     
    }

    function onClickBuscar(ev) {
        let url = usersURL + '/' + inId.value
        fetch(url)
        .then(response => {
            
            if (response.status == 200) {
                 return response.json()
            }
            throw( new Error(response.status))
        })
        .then( (data) => {  
            spanSaludo.innerHTML = data.username
        })
        .catch( (error) => {  
            spanSaludo.innerHTML = 
             ', error de conexión: ' + error
        }) 
    
    }
    
    // ES2017

    async function onClickBuscar2017(ev) {
        let url = usersURL + '/' + inId.value

        try {
           let response = await fetch(url)
           if (response.status == 200) {
                let data = await response.json()
                spanSaludo.innerHTML = data.username
        } else {
          throw( new Error(response.status)) 
        }
        } catch (error) {
          spanSaludo.innerHTML = 
           ', error de conexión: ' + error
        }       
       
     }

}