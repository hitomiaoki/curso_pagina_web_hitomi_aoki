console.log('Hola amigo')

//DATOS

//Tipos primitivos

undefined // Tipo undefined
20 // Tipo number
'Alejandro' // Tipo string
true //Tipo boolean


//Tipos complejos o referenciados

//{nombre:'Pepe', edad:27} Tipo objeto

//Los lenguajes pueden ser de este tipo:
// Tipado fuerte  o  débil  
// Tipado estático o dinámico


// En TypeScript el tipado  es fuerte y estático // (que no se puede cambiar)
{
let b:number//Tipo number, sin valor
b =3
// b = 'Pepe'  //Error de tipos



let precio = 45.60 //number
let producto ='Gafas' //string
//precio = producto //error de tipos
}
function sumarConTipos (a:number, b: number):number{
return a + b
}

/*
function sumarConTipos (a:number, b: number):string{
let c = a + b
return 'El resultado es'+ c
}*/

/*suma(12,25)
No lo aprueba porque es tipado
suma(12,'Pepe')*/