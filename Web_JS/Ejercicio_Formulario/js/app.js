

export function app() {
console.log('Cargando app')


let oDatos = {
    userName: '',
    userPasswd: '',
    email: '',
    isOK:'on',
    curso:'',
    turno:'',
}


let oDatosPretty = {
    userName: 'Nombre de Usuario',
    userPasswd: 'Constraseña',
    email:'Correo electrónico',
    curso:'curso',
    turno:'turno'
}



// Nodos del DOM

let form = document.querySelector('[name="complete-post"]')
let btnReset = document.querySelector('#btnReset')
let aFormData = document.querySelectorAll('.form_data')
let aCheckBox = document.querySelectorAll('[type="checkbox"]')
let aSelects = document.querySelectorAll('select')
let aRadioTurno = document.querySelectorAll('[name="turno"]')
let datos = document.querySelector('#datos')
// Definir manejadores
form.addEventListener('submit', onSubmit)
btnReset.addEventListener('click', onReset)


//Funciones manejadores de eventos
function onSubmit(ev) {
    ev.preventDefault()
    console.log('Iniciando submit')
    aFormData.forEach(item => oDatos[item.name] = item.value)
    aCheckBox.forEach(item => oDatos[item.name] = item.checked)
    aSelects.forEach(item => oDatos[item.name] = item.value)
    oDatos.sitio = getRadio(aRadioTurno)
    renderModal()
}


function onReset(ev) {
    
}


function renderModal() {
    let html = ''  
    for (const key in oDatos) {
          const value = oDatos[key];
        if (key === 'userPassword') {
        html += `<li>${oDatosPretty[key]} --> ******</li>`      
        } else if(key === 'isOK') {
            html += `<li>${oDatosPretty[key]}</li>`
        } else {
            html += `<li>${oDatosPretty[key]} --> ${value} </li>`
        }
    }
    datos.innerHTML = html
}




function getRadio(aNodos) {
    for (let i = 0; i < aNodos.length; i++) {
        const item = aNodos[i];
          if (item.checked) {
               return item.value
          }
    }
}



}