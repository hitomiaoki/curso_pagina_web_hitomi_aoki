
const {} = require('./23_modelos.js')
const {} = require('./23_empresas.js')
const {} = require('./23_productos.js')      





const items = [
new Items('COTMAN acuarela tubo 8 ml',  3 ,  12 ),
new Items('VAN GOGH óleo 60 ml', 5 ,  20) ,
new Items('Bloc acuarela Guarro 240 grs', 25 ,  4 ),
new Items('Bloc para óleo Rembrandt',  10 ,  8 )
], 

const factura_12 = new Factura(
 empresa,cliente1, items,'000000012',
0.04,'Contado',new Date()
)


Factura.render()





