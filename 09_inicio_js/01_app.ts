
//Los lenguajes pueden ser
//Tipado fuerte o débil
//Tipado estático o dinámico


// En TypeScript el tipado  es fuerte y estático // (que no se puede cambiar)
{
let b:number//Tipo number, sin valor
b =3
// b = 'Pepe'  //Error de tipos


let precio = 45.60 //number
let producto ='Gafas' //string
//precio = producto //error de tipos
}

function suma(a:number, b: number):string{
    let c = a + b 
    return 'El resultado es' + c
}

suma(12, 56)
//suma(12, 'Pepe) //Daría un error de tipos