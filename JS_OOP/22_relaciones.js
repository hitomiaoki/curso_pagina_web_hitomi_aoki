
function Direccion(calle, numero, ciudad, pais) {
   this.calle = calle
   this.numero = numero
   this.ciudad = ciudad
   this.pais = pais 
}

function Persona(nombre, edad, direccion) {
    this.nombre = nombre
    this.edad = edad  
    this.direccion = direccion // Asociación (atributos)
    this.mascota = []
}

Persona.prototype.comprarMascota = function(mascota) {
    
     this.mascota.push(mascota) //Dependencia (metodo)
}

function Mascota (nombre, especie) {
    this.nombre = nombre
    this.especie = especie
}

function Alumno(nombre, edad, direccion, curso) {
      this.curso = curso
      Persona.prototype.constructor.call(this, nombre, edad, direccion)
}

Alumno.prototype.inscribirse = function (curso) {
    this.cursos.push(curso)
}

Alumno.prototype = new Persona()
Alumno.prototype.constructor = Alumno

//-----------------------------------------------------------------------

const a1 = new Alumno(
    'Pepe', 
     34,
     new Direccion('c/ Pez',7,'Cádiz', 'España'));



console.log(a1)

console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)

a1.inscribirse('Pagina web')

const m1 = new Mascota('Amedio', 'mono')
const m2 = new Mascota('Perry', 'ornitorrinco')



p1.comprarMascota(m2) //Inyeccion de dependencia

console.log(m2.nombre)
console.log(p1.mascota[0].nombre)


// distancian
/*
const p1 = new Persona(
    'Pepe', 
     34,
     // (a:'c/ Pez',b:7, c:'Cádiz', d:'España'));
     new Direccion('c/ Pez',7,'Cádiz', 'España'));


const m1 = new Mascota('Amedio', 'mono')
const m2 = new Mascota('Perry', 'ornitorrinco')

p1.comprarMascota(m2) // Inyeccion de dependencia
console.log(p1)

console.log(m2.nombre)
console.log(p1.mascota[0].nombre)*/