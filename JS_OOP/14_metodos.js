
const o = {
    id: 123,
    nombre: 'pepe',
    edad: 34,
    conocidos: ['Juan', 'Raul', 'Elena', 'Lola'],
    mostrarID: function () {
      console.log(this.id)
    }, 
     saludar: function (otro = 'amigo') {
        if(this.isConocido(otro)) {
            console.log(`Hola ${otro}, ¿como estas?`)  
        } else {
            console.log(`Hola ${otro} ,soy ${this.nombre}`)   
        }
       
    },  
    isConocido: function (otro) {
        return this.conocidos.some( 
            item => item.toLowerCase() === otro.toLowerCase())
    }
}


o.mostrarID()
o.saludar('Juan')
o.saludar()
o.saludar('Pepi')
