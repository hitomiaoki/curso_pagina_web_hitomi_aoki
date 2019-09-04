import {USERS} from './api.js'
export function app() {
   console.log('Cargando app')
   let aUsers = []
   getDatos()

    // NODOS DEL DOM
    let aInputs =  document.querySelectorAll('input')
    let btnAdd = document.querySelector('#btn-add')
    let tbUsuarios = document.querySelector('#tb-usuarios')
    let aBtnEditar = [] // Toman valor
    let aBtnBorrar = [] // Toman valor
    let dlgBorrar = document.querySelector('#dlg-borrar')
    let dlgEditar = document.querySelector('#dlg-editar')


    // Asociación de manejadores de eventos
    btnAdd.addEventListener('click',onClickAdd)

   // Funciones manejadores de evento
     function onClickAdd() {
          let oUser = {
              nombre: aInputs[0].value,
              edad:   aInputs[1].value
          }
          console.log(oUser)
          let cabecera = new Headers({
              'Content-Type' : 'application/json'
          })
          fetch(USERS,{
               method: 'POST', 
               headers: cabecera,
               body: JSON.stringify(oUser)})
          .then(response => response.json())
          .then (data => {
            if ( data.id > 0) {
              
            }
          }

      )}      
           
     
     function onClickEditar(ev) {
         console.log(ev.target)
         let id
         if (ev.target.tagName == 'TD') {
             id = ev.target.dataset.id     
         } else {
           id = ev.target.parentElement.dataset.id
         }
         dlgEditar.showModal()
         console.log('Editando', id)
     }

     function onClickBorrar(ev) {
      console.log(ev.target)
      let id
      if (ev.target.tagName == 'TD') {
          id = ev.target.dataset.id     
      } else {
        id = ev.target.parentElement.dataset.id
      }
      dlgBorrar.showModal()
      console.log('Borrando', id)
  }



   // Otras funciones
      
    function getDatos() {
      fetch(USERS)
      .then( response => response.json())
      .then( data => {
        aUsers = data
        renderData()
      })
    }

    function renderData() {
      let html = ''
      `
      <tr>
           <th>Id</th>
          <th>Nombre</th> |
          <th>Edad</th>
          <th></th>
          <th></th>
      </tr>`

      aUsers.forEach(item =>  html = `
      <tr>
          <td>${item.id}</td>
          <td>${item.nombre}</td> |
          <td>${item.edad}</td>
          <td class = 'boton btn-editar'><i class="fas fa-user-edit"  data-id= "${item.id}"></i></td>
          <td class = 'boton btn-borrar'><i class="fas fa-trash    data-id= "${item.id}""></i></td>    
      </tr>` );
      tbUsuarios.innerHTML = html
      actualizarBotones()

    }

     function actualizarBotones() {
        // NODOS DEL DOM
        aBtnEditar = document.querySelectorAll('.btn-editar')
        aBtnBorrar = document.querySelectorAll('.btn-borrar')
        // Asociación de manejadores de eventos
        aBtnBorrar.forEach
     }





    function renderError(error) {
      pError.innerHTML = 'error de conexión: ' + error
  }



}