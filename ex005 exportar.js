console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1;
exports.b = 2;
module.exports.c = 3;

// abaixo nao funciona
exports = null;
console.log(module.exports);


//abaixo nao funciona
exports = {
  nome: 'Teste'
}

console.log(module.exports);

//para fazer alteracao tem que ser desta forma, das formas acima nao funciona
module.exports = {publico: true}