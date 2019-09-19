
export function app() {


  console.log('Cargando app')


  let aBtn = document.querySelector('button')
  let output = document.querySelector('output')

  aBtn.addEventListener('click', onClick)


  function onClick() {
    console.log('d')
    output.innerHTML = "Hola"

  }
}