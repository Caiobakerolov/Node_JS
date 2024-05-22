const contadorA = require('./ex007 instanciaUnica');
const contadorB = require('./ex007 instanciaUnica');

const contadorC = require('./ex008 instanciaNova')();
const contadorD = require('./ex008 instanciaNova')();


contadorA.inc();
contadorA.inc();
console.log(contadorA.valor ,contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor ,contadorD.valor);