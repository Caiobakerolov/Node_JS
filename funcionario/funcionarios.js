const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');


// separar a mulher chinesa com os maior salario
const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => {
  return func.salario > funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
  const funcionarios = response.data;
  console.log(funcionarios);

  // separar a mulher chinesa com o maior salario

  const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
  console.log(func);

})
