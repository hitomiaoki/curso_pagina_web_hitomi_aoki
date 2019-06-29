// Si estamos en Java, C## , PHP ...
// Los objetos dependen de clases
//class Persona {.....}
//p1 = new Persona()
//p2 = new Persona()

// En JS tenemos objetos literales
// basados en la notacion JSON

let p1 = {
    nombre:'Pepe',
    edad: 33,
    direccion:{
        calle:'c/ Pez',
        numero:'24',
        ciudad:'Cádiz',
        pais:'España',

    },
    aficiones: ['pintar','musica','montañismo'],
    isAlumno:true
}

let p2 = {
    nombre:'Rosa',
    edad: 35,
    isAlumna:true
}

p1.altura = 179
p2.colorPelo = "castaño"

console.log(p1)
console.log(p2)


console.log(p1.nombre)
console.log(p1.direccion.ciudad)
console.log(p1.aficiones[0])


let prop = 'profesion'
p2[prop] = 'escritora'
console.log(p2[prop])

for (const key in p2) {
    const value = p2[key];
    console.log(`La propiedad ${key}  vale ${value}` )
        
    
}
console.log("....................")

console.log('Mostrar' + p1)

for (const key in p1) {
    const value = p1[key];
    console.log(`La propiedad ${key}  vale ${value}`)          
}

let aDatos = ['perro', 'gato', 'caballo', 'ornitorrinco']

for (const i in aDatos) {
     const value = aDatos[i];
     console.log(`La propiedad ${i} vale ${value}`)             
}