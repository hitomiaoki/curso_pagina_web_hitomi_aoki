export function app() {
   console.log('Cargando app')
   const usersURL = 'https://jsonplaceholder.typicode.com/users'
 

    // NODOS DEL DOM
     let btnBuscar = document.querySelector('#btn-buscar')
     let btnBorrar = document.querySelector('#btn-borrar')
     let inId = document.querySelector('#in-id')
     let spanSaludo = document.querySelector('#span-saludo')


    // Asociación de manejadores de eventos
    //btnGuardar.onclick = onClickGuardar
    btnBuscar.addEventListener('click', onClickBuscar)
    btnBorrar.addEventListener('click', onClickBorrar)
    

  // Funciones manejadores de evento
    function onClickBorrar(ev) {
        inId.value = ''
        spanSaludo.innerHTML =  inNombre.value     
    }

    function onClickBuscar(ev) {
        let url = usersURL + '/' + inId.value
        ajax('GET', url, leerDatos)
     
    }


    

     function leerDatos(http) {
         /*if(http.readyState  == 4 && http.status == 200) {
            let data = JSON.parse(http.responseText) 
            console.log(data)
            spanSaludo.innerHTML = data.username
        } else if (http.readyState  == 4) {
            spanSaludo.innerHTML = ', datos no encontrados'
            //location.assign('./error.html')  
          }*/
        if (http.readyState  == 4) {
            if (http.status == 200) {
                let data = JSON.parse(http.responseText)
                spanSaludo.innerHTML = data.username    
        } else {
           //spanSaludo.innerHTML = ', datos no encontrados'
           location.assign('./error.html')
          }  
        }
     }

     
    // Función del evento "AJAX"
       function ajax(metodo, url, callback) {
            const http = new XMLHttpRequest()   
            http.addEventListener('readystatechange',
               () => {callback (http) })
            http.open(metodo, url)
            http.send()   
       }     

}