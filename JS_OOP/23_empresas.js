const { Empresa, Direccion } = require('./23_modelos.js')

 module.exports = {}

 module.exports.jeco = new Empresa('Bellas Artes Jeco',
 
                new Direccion('c/ Pelayo' ,'38', 'Madrid','España'),
               '913199690',  
               'J-66273827')
 
 module.exports.alberto = new Empresa(
    ' Libreria Alberto',
      new Direccion('c/ Agustin Lara' ,'69', 'Madrid', 'España'),
      '744172153',
      'A-46625137')
 
module.exports.pepita = new Empresa(
     'Libreria Pepita',
      new Direccion('c/ Burgo' ,'8', 'Estrasburgo', 'Francia'),
      '744172153',
      'F-48625437')
                                 