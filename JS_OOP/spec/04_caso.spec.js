let {comprobarCaso,mostrarComprobacionCaso} = require('../04_caso.js')


describe('comprobarCaso', () => {
    it('should be 0 if all MAY', () => {
       const cadena = 'HOLA PEPE' 
       expect(comprobarCaso(cadena)).toEqual(0);
    });

    it('should be 1 if all min', () => {
        const cadena = 'hola amigo'
        expect(comprobarCaso(cadena)).toEqual(1);
    });

    
    it('should be 2 if MAY & min', () => {
        const cadena = 'Hola Pepe'
        expect(comprobarCaso(cadena)).toEqual(2);
    });

});




describe('mostrarComprobacionCaso', () => {
    it('should be - solo mayusculas- if all MAY', () => {
       const cadena = 'HOLA PEPE' 
       console.log = jasmine.createSpy("log")
       mostrarComprobacionCaso(cadena)
       expect(console.log).toHaveBeenCalledWith('solo mayusculas');
    });

    it('should be - solo minisculas - if all min', () => {
        const cadena = 'hola amigo' 
        console.log = jasmine.createSpy("log")
        mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('solo minisculas');
     });

     
    it('should be - mayusculas y minusculas- if MAY & min', () => {
        const cadena = 'Hola Pepe' 
        console.log = jasmine.createSpy("log")
        mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('mayusculas y minusculas');
     });

});