import { Crono } from "./crono.js";

export function app() {
    console.log('Cargando app')  
    
    let btnSalir = document.querySelector('#btn-salir')
    let dlgCancelar = document.querySelector('#dlg-cancelar')
    let btnCancelar = document.querySelector('#btn-cancelar')
    let dlgTime =  document.querySelector('#dlg-time')
    let handlerSalir
    let handlerInterval

    btnSalir.addEventListener('click', onClick)
    btnCancelar.addEventListener('click', onCancel)

    new Crono()

   /* let aCronos = [
      'crono-1', 'crono-2', 'crono-3', 'crono-4',
    ]

    aCronos.forEach(idCrono => {
        new crono(idCrono)
    });*/
    



    function onClick() {
        let url = 'https://www.google.com/'
         handlerSalir = setTimeout(() => location.assign(url),
                     4800)  
        dlgCancelar.showModal()
        dlgTime.value = 5
        handlerInterval = setInterval( () => {
           dlgTime.value -= 1
        }, 1000)
       
    }

    function onCancel() {
        clearTimeout(handlerSalir)
        clearInterval(handlerInterval)
        dlgCancelar.close()
    }
     
 }



