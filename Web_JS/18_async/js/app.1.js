export function app() {
   console.log('Cargando app')
   const usersURL = 'https://jsonplaceholder.typicode.com/users'
 

    // NODOS DEL DOM
     let btnBuscar = document.querySelector('#btn-buscar')
     let btnBorrar = document.querySelector('#btn-borrar')
     let inId = document.querySelector('#in-id')
     let spanSaludo = document.querySelector('#span-saludo')


    // Asociación de manejadores de eventos
    btnBuscar.addEventListener('click', onClickBuscar)
    btnBorrar.addEventListener('click', onClickBorrar)
    

  // Funciones manejadores de evento
    function onClickBorrar(ev) {
        inId.value = ''
        spanSaludo.innerHTML =  inId.value     
    }

    function onClickBuscar(ev) {
        let url = usersURL + '/' + inId.value
        ajax('GET', url, leerDatos)
     
    }


    // Función del evento "AJAX"

     function leerDatos(http) {
         if(http.readyState  == 4 && http.status == 200) {
            let data = JSON.parse(http.responseText) 
            console.log(data)
            spanSaludo.innerHTML = data.username
        } else {
            spanSaludo.innerHTML = ',tenemos un problema de conexión'
            //location.assign('./error.html')  
          }

     }
    
       function ajax(metodo,url,callback) {
            const http = new XMLHttpRequest   
            http.addEventListener('readystatechange', () => {callback (http)})
            http.open(metodo, url)
            http.send()   
    
       }     

}