
export class Crono {
     constructor(id = 0, nodo)  {
         this.id = id
         this.isOn = false
         this.time = 0
         this.handle = 0
         this.crearCrono(nodo)
         this.aBotones = document.querySelectorAll(`#crono-${this.id} button`)
         this.btnToggle = document.querySelector(`#btn-toggle-${this.id}`)
         this.output = document.querySelector(`#crono-${this.id} output`)
         console.log(this)
         this.aBotones.forEach(btn => btn.addEventListener(
             'click', this.onClickBnt.bind(this)
         ))
            
     }

   crearCrono(nodo) {
       let el = document.createElement('div')
       el.className = 'cronos'
       el.setAttribute('id', `crono-${this.id}`)
       el.innerHTML = `Crono ${this.id}
       <output>0 : 0 : 0</output>
       <button id="btn-toggle-${this.id}">Play</button>
       <button id="btn-reset-${this.id}">Reset</button>`
       console.log(el)  
       nodo.appendChild(el)
   }



   onClickBnt(ev) {
       switch (ev.target.id) {
           case `btn-toggle-${this.id}`:
                if (this.isOn) {
                    this.pause()
                    this.aBotones[0].textContent = 'Play'
                } else {
                    this.play()  
                    this.aBotones[0].textContent = 'Pause'
                }
               this.isOn = !this.isOn
               break;     
           default: // btn-reset
               this.reset()
               break;
       }
   }


 play() {
    this.handle = setInterval( () => {
         this.time += 10
         this.render()
   }, 10)
 }

 pause() {
   clearInterval(this.handle) 
}

reset() {
   this.time = 0
   this.render()  
}

 render() {
    let minutos = parseInt(this.time / (1000 * 60)) 
    let milesimasRestantes = this.time % (1000 * 60)
    let segundos = parseInt(milesimasRestantes / 1000)
    milesimasRestantes = milesimasRestantes % 1000
    let centesimas = parseInt(milesimasRestantes / 10)
    this.output.value = 
     `${minutos} : ${segundos} : ${centesimas} `
 }

}