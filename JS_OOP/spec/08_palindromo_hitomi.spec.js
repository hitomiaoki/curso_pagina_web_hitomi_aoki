let {isPalindromo: isPaliShort, isPaliShort} = require('../08_palindromo_hitomi.js')


describe('Palindromos: isPalindromo', () => {
   it('should be true "La ruta nos aporto otro paso natural"', () => {
       let cadena = 'La ruta nos aporto otro paso natural'
       expect(isPaliShort(cadena)).toBeTruthy()
   }); 

   it('should be false "Un anillo para gobernarlos a todos"', () => {
    let cadena = 'Un anillo para gobernarlos a todosl'
    expect(isPaliShort(cadena)).toBeFalsy()
}); 


});



describe('Palindromos: isPaliShort', () => {
    it('should be true La ruta nos aporto otro paso natural', () => {
        let cadena = 'La ruta nos aporto otro paso natural'
        expect(isPaliShort(cadena)).toBeTruthy()
    }); 
 
    it('should be false Un anillo para gobernarlos a todos', () => {
     let cadena = 'Un anillo para gobernarlos a todosl'
     expect(isPaliShort(cadena)).toBeFalsy()
    }); 
 
 });