export function app() {
    console.log('Cargando app')  
    
    let btnSalir = document.querySelector('#btn-salir')
    let dlgCancelar = document.querySelector('#dlg-cancelar')
    let btnCancelar = document.querySelector('#btn-cancelar')
    let handler

    btnSalir.addEventListener('click', onClick)
    btnCancelar.addEventListener('click', onCancel)

    function onClick() {
        let url = 'https://www.google.com/'
        let msg =
         
         handler = setTimeout(() => {
          location.assign(url)   
         }, 2000)  
        dlgCancelar.showModal()
       
    }

    function onCancel() {
        clearTimeout(handler)
        dlgCancelar.close()
    }
     
 }