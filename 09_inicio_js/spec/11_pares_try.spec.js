


describe('Función esPar',() => {

    let esPar = required('../11_pares_try.js')
    console.log(esPar)
    let n

    it('should be true if n = 0', () => {
        n = 0
       expect(esPar(n)).toEqual(true) 
    
    })


    it('should be false if n = 1', () => {
        n = 1
       expect(esPar(n)).toEqual(false) 
    
    })

   
    it('should be true if n = 2', () => {
         n = 2
        expect(esPar(n)).toEqual(true) 
    
      })
    
       
      it('should be false if n = 11', () => {
         n = 11
            expect(esPar(n)).toEqual(false) 
        
          })

       
      it('should be false if n = string 23', () => {
        n = 23
            expect(esPar(n)).toEqual(false) 
        
          })
    
      it('should be true if n = string 22', () => {
         n = 22
        expect(esPar(n)).toEqual(true) 
    
      })
  
      
      it('should be false if n = -5', () => {
         n = -5
        expect(esPar(n)).toEqual(false) 
    
      })
  
    
      it('should be true if n = -4', () => {
         n = -4
        expect(esPar(n)).toEqual(true) 
    
      })
  
      it('should throw error if n = "Pepe"', () => {
        let n = 'Pepe'
        expect(f.esPar.bind(null,n)).toTrowError(/no es un número/); 

       });
   
      
       it('should throw error if n = 4.3', () => {
        let n = 4.3
        expect(f.esPar.bind(null,n)).toTrowError(/no es un entero/); 

       });


       
   })