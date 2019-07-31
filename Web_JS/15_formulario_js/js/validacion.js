export function validacion() {

    let userName = document.querySelector('#userName')
    //userName.addEventListener('input', onUserInput)
    userName.addEventListener('blur', onUserInput)
    console.dir(userName)

    function onUserInput(ev) {
        let nodo = ev.target
        console.dir(nodo)
        //if (!nodo.validity.valid) { //un metodo existe
           if ( !nodo.checkValidity()) {//checkar una propiedad
             nodo.nextElementSibling.innerHTML =
                nodo.validationMessage
                nodo.nextElementSibling.hidden = false
        
        }
            
    }

}

export function validacionFinal(nodos) {
    console.dir(nodos)
    let r = false
    nodos.some(nodo => {
       if ( !nodo.checkValidity()) {
        nodo.parentNode.nodo.nextElementSibling.innerHTML =
           nodo.validationMessage
        nodo.parentNode.parentNode.nodo.nextElementSibling.hidden = false
   } else {
    r = true
    nodo.parentNode.nodo.nextElementSibling.hidden = true
   }   
})
  return r
}