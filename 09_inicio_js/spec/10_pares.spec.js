


describe('Function isEntero', () => {
  
     let f = required('../10_pares')
     f.esPar()
    it('should be true if n is 2' , () => {
      let n = 2
      expect(f.isEntero(n)).toBeTruthy()
    });


    
    it('should be false if n is 2.2' , () => {
      let n = 2.2
      expect(f.isEntero(n)).toBeFalsy()
    });


    
    it('should be true if n is -2' , () => {
      let n = -2
      expect(f.isEntero(n)).toBeTruthy()
    });


    
    it('should be false if n is -2.2' , () => {
      let n = -2.2
      expect(f.isEntero(n)).toBeTruthy()
    });


     
    it('should be true if n is 0' , () => {
     let n = 0
     expect(f.isEntero(n)).toBeTruthy() 
    });

    
       
    it('should be true if n is "2"' , () => {
     let n = "2"
     expect(f.isEntero(n)).toBeTruthy() 
    });




});





describe('Función esPar',() => {

  let esPar = required('../10_pares')
  
  it('should be true if n = 0', () => {
    let n = 0
     expect(f.esPar(n)).toBeTruthy() 
  
  })


  it('should be false if n = 1', () => {
   let n =1
     expect(f.esPar(n)).toBeFalsy() 
  
  }) 

 
  it('should be true if n = 2', () => {
      
    let n = 2
    expect(f.esPar.bind(n)).toBeTruthy()
    })
    
     
    it('should be  false if n = string "11"', () => {
      let n = '23'
      expect(f.esPar(n)).toBeFalsy() 
      })

     
    it('should be true if n = string "22"', () => {
      let n = '22'
      expect(f.esPar.bind(n)).toBeTruthy()  
      
        })
  
    it('should be false if n = -5', () => {
     let n = -5
     expect(f.esPar(n)).toBeFalsy()
  
    })

    
    it('should be true if n = -4', () => {
     let n = -4
     expect(f.esPar(n)).toBeTruthy()
  
    });

  
    it('should be -2 if n = "Pepe"', () => {
     let x = 'Pepe'
     expect(f.esPar(n)).toBeFalsy() 
  
    })

  
    it('should be -1 if n = 4.3', () => {
    let x = 4.3
    expect(f.esPar(n)).toBeFalsy()
 
   });

 
   it('should be -1 if n = -6.7', () => {
    let x = -56.7
    expect(f.esPar(n)).toBeFalsy()
 
   });




 })