

      console.log('Cargando app') 
      // Nodos del DOM

      const aBotones = document.querySelectorAll('.btn')
      const aInputs = document.querySelectorAll('.input')  
      const aOutputs = document.querySelectorAll('.output')
      // Asignación de los manejadores
    
      aBotones.forEach(btn => btn.addEventListener('Click',
      onBtnClick));    
    
      //  Manejadores de eventos

      function onBtnClick (ev) {
         switch (ev.target.id) {
             case 'triangulo': 
                   break;
    
            case 'cuadrado':
                    break;

            case 'circulo':
                    break;
     }
  }

/*function cuadrado(area, base, altura) {
    this.area = area
    this.base = base
    this.altura = altura 
}
area(base * altura)


function Circulo(radio) {
    let pi = Math.PI
    radio = radio * radio 
    
}


function triangulo(lado) {
    
}*/

