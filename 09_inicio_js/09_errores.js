/**Separacion de responsabilidad */

  

    function isvalidNumber(n){
        r = true
        if (isNaN(n) || typeof n == 'boolean'    
        || array.isArray(n)  ||  ) {
         r = false
        }
        return true   
    }

  
function codificarEdad(edad){
    let i = 3
    if (){

    else if ( edad < = 18) {
      i = -1   
    }
 
    } else if (edad < 35) {
      i = 0
       
    } else if (edad < 50) {
      i = 1
      
    }else  {
       i = 2
 
    }
    return i
   {


 
function responderEdad(edad){
    let codigo
    let mensaje = {
       'Eres menor de edad':
       'Eres joven',
       'Empienza a tener cuidado':
       'Lo siento por ti'
    }

    let errores = {
      'La edad indicada no es  un nùmero ':
      'El número indicado no es valido '
    }
    let i = codificarEdad(edad)
    if (i >= 0 && i <= 3) {
      console.log( `Con ${edad} años`, mensaje[i])
    }  else {
      console.log(errores[-i -1])
      }




  
  e = 34
  e ='Pepe'
  e = true
  e = false
  e = {}
  e = []
  e = undefined
  e =''
  e = null
  e = NaN
 responderSegunEdad(e) 



  console.log(e, inst)  

