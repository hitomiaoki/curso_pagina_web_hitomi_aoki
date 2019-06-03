


describe('Función esPar',() => {

    let esPar = required('../11_pares_try.js')
    console.log(esPar)
    let n

    it('should be "par" if n = 0', () => {
        n = 0
       expect(esPar(n)).toEqual(true) 
    
    })


    it('should be "impar" if n = 1', () => {
        n = 1
       expect(esPar(n)).toEqual(false) 
    
    })

   
    it('should be "par" if n = 2', () => {
         n = 2
        expect(esPar(n)).toEqual(true) 
    
      })
    
       
      it('should be "impar" if n = 11', () => {
         n = 11
            expect(esPar(n)).toEqual(false) 
        
          })

       
      it('should be "impar" if n = string 23', () => {
        n = 23
            expect(esPar(n)).toEqual(false) 
        
          })
    
      it('should be "par" if n = string 22', () => {
         n = 22
        expect(esPar(n)).toEqual(true) 
    
      })
  
      
      it('should be "impar" if n = -5', () => {
         n = -5
        expect(esPar(n)).toEqual(false) 
    
      })
  
    
      it('should be "par" if n = -4', () => {
         n = -4
        expect(esPar(n)).toEqual(true) 
    
      })
  
    
    x = 345
    x = 98
    x = 0
    x = -4
    x = -5
    x = 4.3
    x = -56.7
    x = 'Pepe'
    x = '56'
   
     


 
   })