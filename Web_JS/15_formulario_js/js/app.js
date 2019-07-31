import { validacion, validacionFinal } from "./validacion.js";

export function app() {
    console.log('Cargando app') 
    
     //Variables
    let oDatos = {
        userName: '',
        userPasswd: '',
        email: '',
        cv: '',
        birthDate: '',
        info: '',
        isOk: 'on',
        curso: '',
        sitio: '',
    }
   
    let oDatosPretty = {
        userName: 'Nombre de Usuario',
        userPasswd: 'Contraseña',
        email: 'Correo electrónico',
        cv: 'Formación',
        birthDate: 'Fecha de nacimiento',
        info: 'Más informción',
        curso: 'Curso',
        sitio: 'Sitio',
    }


    // Nodos del DOM
     let form = document.querySelector('[name="complete-post"]')
     let btnReset = document.querySelector('#btnReset')
     let aFormData = document.querySelectorAll('.form_data')
     let aCheckBox = document.querySelectorAll('[type="checkbox"]')
     let aSelects = document.querySelectorAll('select')
     let aRadioSitio = document.querySelectorAll('[name="sitio"]')
     let dlgConfirm  = document.querySelector('#dlg-confirm')
     let aDlgButtons = document.querySelectorAll('#dlg-confirm button')
     
    // Definir manejadores
    form.addEventListener('submit', onSubmit)
    btnReset.addEventListener('click', onReset)
    aDlgButtons.forEach(btn => btn.addEventListener('click', onClickDlg))
   
    validacion()

   // Funciones manejadores de eventos

  function onSubmit(ev) {
      ev.preventDafault()
      console.log('Iniciando submit')


      if(!validacionFinal()) {
          return
      }

      aFormData.forEach(item => oDatos[item.name] =  item.value)
      aCheckBox.forEach(item => oDatos[item.name] =  item.checked)
      aSelects.forEach(item => oDatos[item.name] =  item.value)
      oDatos.sitio = getRadio(aRadioSitio)
      renderModal()
   
  }


 function nodosValidables(params) {
     
      let aNodos = []
      aFormData.forEach(
          item => aNodos.push(item)
    )
      

      aCheckBox.forEach(
        item => aNodos.push(item)
    )
      
      aSelects.forEach(
        item => aNodos.push(item)
    )
    aNodos.push(aRadioSitio[0])
 
    return aNodos.filter(item => item.checkValidity())
     
 }



  
 function onReset(ev) {}
 

 function onClickDlg(ev) {
     if(ev.target.textContent.toLowerCase() === 'SI') {
       // Enviar de verdad
       form.submit()
     }
     dlgConfirm.close()
 }

 function renderModal() {
     let html = ''
     for (const key of oDatos) {
            const value = oDatos[key];
            if(key === 'userPassword') {
            html += `<li>${oDatosPretty[key]} --> *****</li>`    
            } else if(key === 'isOk'){
                html += `<li>${oDatosPretty[key]}</li>`    
            } else {
                html += `<li>${oDatosPretty[key]} --> ${value} </li>`    
            }

          
     }
     dlgConfirm.children[1].innerHTML = html
     dlgConfirm.showModal() 
   
 }


 function getRadio(aNodos) {
    for (let i = 0; i < aNodos.length; i++) {
        const item = aNodos[i];
         if(item.checked) {
             return item.value}
      }

    }

 }